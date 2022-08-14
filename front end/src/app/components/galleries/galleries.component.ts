import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pic } from 'src/app/pic.model';
import { GetPicsService } from 'src/app/services/getPics/get-pics.service';
import { ShareService } from 'src/app/services/share/share.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss'],
})
export class GalleriesComponent implements OnInit {
  images: any = '';
  browserRefresh: boolean;
  pictures: string =
    '../../../../../assets/images/photo-1656414896156-bb1339254229.jpg';
  subscription: Subscription;
  constructor(
    private getpics: GetPicsService,
    private http: HttpClient,
    private share: ShareService,
    private router: Router
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: '563492ad6f91700001000001905834ecaee8421a98a3168f71806b6e',
    }),
  };

  ngOnInit(): void {
    if (!this.share.flag.value) {
      this.getpics.natPics().subscribe((res) => {
        this.images = res.photos.map((photo) => {
          return photo.src.medium;
        });
        console.log(`this is ${this.share.flag.value}`);
        this.share.changeImg(this.images);
        this.share.setImagesApi.subscribe((image) => {
          return (this.images = image);
        });
      });
    } else {
      this.share.setImagesApi.subscribe((image) => {
        return (this.images = image);
      });
    }
  }
  toggleFlag() {
    this.share.toggleLogined(!this.share.isLogined.value);
    console.log(this.share.isLogined.value);
  }
}
