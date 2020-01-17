import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) {}

    ngOnInit() {
      this.authService.getAuth().subscribe(auth => {
        if(auth) {
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        } else {
          this.isLoggedIn = false;
        }
      });
    }

    onLogoutClick() {
      this.authService.logout();
      this.isLoggedIn = false;
      this.openSnackBar('You are logged out!', 'Goodbye!');
      this.router.navigate(['/login']);
    }
    
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000
      });
    }

}
