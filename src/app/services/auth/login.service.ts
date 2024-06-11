import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { User } from './user';
import { isPlatformBrowser } from '@angular/common';
import { AsyncLocalStorage } from 'async_hooks';

interface usuario{
  usuario:string,
  password:string
}
interface authenticado{
  status: boolean,
  token: string,
  username:string,
  userId:number
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isAuthenticated: boolean = false;
  private url = 'http://localhost:8090/api/usuario';

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({ id: 0, email: '' });

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    // const storedAuthState = localStorage.getItem('isAuthenticated');
    // this.isAuthenticated = storedAuthState === 'true';
   }

  login(credentials: LoginRequest): Observable<User> {
    return this.http.get<User>('././assets/gets/data.json').pipe(
      tap((userData: User) => {
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('se ha producido un error', error.error);
    } else {
      console.error('Backend retorno el codigo de estado', error.status, error.error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente.'));
  }

  get userData():Observable<User>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(){
    return this.currentUserLoginOn.asObservable();
  }

  // ******************
  loginApi(usuario:usuario): Observable<authenticado> {
    const updateUrl = `${this.url}/login`; 
    
    return this.http.post<authenticado>(updateUrl,usuario);
  }
  logoutApi(): void {
    // Lógica para cerrar sesión
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  setAuthenticated(): void {
    // localStorage.setItem('isAuthenticated', 'true');
    this.isAuthenticated = true;
  }



}
