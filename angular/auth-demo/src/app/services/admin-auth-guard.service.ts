import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor( private router: Router, private authService: AuthService) { }

  canActivate() {
   if ( this.authService.currentUser && this.authService.currentUser.admin) return true;
   this.router.navigate(['/no-access']);
   return false;
  }
}
