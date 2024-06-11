import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface Periodo {
  id?: number,
  nombre: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:8090/api/periodo';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  addPeriodo(data: Periodo): Observable<Periodo> {
    return this.http.post<Periodo>(this.url, data);
  }

  updatePeriodoApi(data: Periodo): Observable<Periodo> {
    const updateUrl = `${this.url}/${data.id}`;
    console.log(updateUrl);
    return this.http.put<Periodo>(updateUrl, data);
  }
  deletePeriodo(data: Periodo): Observable<Periodo> {
    const updateUrl = `${this.url}/${data.id}`;
    return this.http.delete<Periodo>(updateUrl);

  }
}
