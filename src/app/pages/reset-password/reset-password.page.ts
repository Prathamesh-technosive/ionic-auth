import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: any;
  constructor(
    public authService: AuthenticationService,
    public route: Router,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async resetPassword() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.authService
      .resetPassword(this.email)
      .then(() => {
        console.log('reset link send');
        this.route.navigate(['/login']);
        this.email = '';
        loading.dismiss();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
