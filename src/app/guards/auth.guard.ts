import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!sessionStorage?.getItem('token');
    if (isLoggedIn) {
      return true;
    }
    this.router.navigate(['/alerTime']);
    return false;
  }
}