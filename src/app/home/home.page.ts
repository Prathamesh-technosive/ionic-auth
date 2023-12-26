import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public authService: AuthenticationService,
    public route: Router
  ) {}
  async logout() {
    this.authService
      .signOut()
      .then(() => {
        this.route.navigate(['/login']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
