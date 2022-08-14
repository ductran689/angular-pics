import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

import { from } from 'rxjs';
import { GetPicsService } from '../getPics/get-pics.service';
import { ShareService } from '../share/share.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  images: any;
  isLoggedIn: boolean;

  constructor(
    private auth: Auth,
    private router: Router,
    private share: ShareService,
    private getpic: GetPicsService
  ) {
    this.share.setIsLogined.subscribe((res) => (this.isLoggedIn = res));
  }

  //login
  login(value: any) {
    signInWithEmailAndPassword(this.auth, value.email, value.password).then(
      () => {
        localStorage.setItem('token', JSON.stringify(value));
        this.share.toggleLogined(true);
        const token = localStorage.getItem('token');

        if (this.isLoggedIn) this.router.navigate(['/galleries']);
        //set firstload data for galleries
        this.getpic.natPics().subscribe((res) => {
          this.images = res.photos.map((photo) => {
            return photo.src.original;
          });
          this.share.changeImg(this.images);
        });
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }
  //register
  signup(value: any) {
    createUserWithEmailAndPassword(this.auth, value.email, value.password).then(
      (res) => {
        this.router.navigate(['login']);
        alert('successfull');
      },
      (err) => {
        alert(err.massage);
        this.router.navigate(['signup']);
      }
    );
  }
  //logout
  logout() {
    signOut(this.auth).then(
      () => {
        this.router.navigate(['/']);
        this.share.toggleLogined(false);
      },
      (err) => {
        alert(err.massage);
      }
    );
  }
}
