import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "../services/auth/login.service";




@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private authService: LoginService, private router: Router){
        console.log('AuthGuard initialized');
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        if(this.authService.isLoggedIn()){
            return true;
        }else{
            return this.router.createUrlTree(['/login']);
        }
    }
    
}