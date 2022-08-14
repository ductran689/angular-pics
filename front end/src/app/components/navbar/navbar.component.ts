import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ShareService } from 'src/app/services/share/share.service';
import { GetPicsService } from '../../services/getPics/get-pics.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  pic: any = '';
  token: any = localStorage.getItem('token');
  loginStatus: boolean;
  images: any;
  isLoggedIn: boolean;
  constructor(
    private getpic: GetPicsService,
    private auth: AuthService,
    private share: ShareService
  ) {}

  ngOnInit(): void {
    this.share.setIsLogined.subscribe((res) => (this.isLoggedIn = res));
    this.token ? (this.loginStatus = true) : (this.loginStatus = false);
  }

  getPic() {
    this.getpic.natPics().subscribe((res) => {
      this.images = res.photos.map((photo) => {
        return photo.src.medium;
      });
      this.share.changeImg(this.images);
    });
  }
  signOut() {
    this.auth.logout();
    window.localStorage.removeItem('token');
  }

  natClick() {
    this.share.changeFlag(true);
    this.getpic.natPics().subscribe((res) => {
      this.images = res.photos.map((photo) => {
        return photo.src.medium;
      });
      this.share.changeImg(this.images);
    });
  }
  compClick() {
    this.share.changeFlag(true);
    this.getpic.compPics().subscribe((res) => {
      this.images = res.photos.map((photo) => {
        return photo.src.medium;
      });
      this.share.changeImg(this.images);
    });
  }
  beachClick() {
    this.share.changeFlag(true);
    this.getpic.beachPics().subscribe((res) => {
      this.images = res.photos.map((photo) => {
        return photo.src.medium;
      });
      this.share.changeImg(this.images);
    });
  }
  churchClick() {
    this.share.changeFlag(true);
    this.getpic.churchPics().subscribe((res) => {
      this.images = res.photos.map((photo) => {
        return photo.src.medium;
      });
      this.share.changeImg(this.images);
    });
  }
  animalClick() {
    this.share.changeFlag(true);
    this.getpic.animalPics().subscribe((res) => {
      this.images = res.photos.map((photo) => {
        return photo.src.medium;
      }); /*  */
      this.share.changeImg(this.images);
    });
  }
}
