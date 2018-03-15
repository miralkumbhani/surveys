import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate() {
        if (localStorage.getItem('isLoggedIn') == 'true') {
            return true;
        } else {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('authtoken');
            this.router.navigate(['/login']);
            return false;
        }
    }
}