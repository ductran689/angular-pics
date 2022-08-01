import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pic } from 'src/app/pic.model';
import { GetPicsService } from 'src/app/services/getPics/get-pics.service';
import { ShareService } from 'src/app/services/share/share.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {

  images: string=''
  pictures: string = '../../../../../assets/images/photo-1656414896156-bb1339254229.jpg'

  constructor(
    private getpics: GetPicsService,
    private http: HttpClient,
    private share: ShareService
  ) { }

  httpOptions ={
    headers: new HttpHeaders({
      Authorization:'563492ad6f91700001000001905834ecaee8421a98a3168f71806b6e'
    })
  }
  ngOnInit(): void {
    /* this.share.setImagesApi.subscribe(image => this.images = image)
    console.log(this.images.values) */
    this.share.setImagesApi.subscribe(image => {
     return this.images = image
    })

  }











}
