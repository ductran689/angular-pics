import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pic } from 'src/app/pic.model';
import { GetPicsService } from 'src/app/services/getPics/get-pics.service';
import { ShareService } from 'src/app/services/share/share.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss'],
})
export class MaincontentComponent implements OnInit {

  constructor(
    private getpic: GetPicsService,
    private http: HttpClient,
    private share: ShareService
  ) { }
  // form search
  searchForm = new FormGroup({
    search: new FormControl()
  });
  // get Api
    httpOptions={
      headers: new HttpHeaders({
        Authorization:'563492ad6f91700001000001905834ecaee8421a98a3168f71806b6e'
      })
    }
  ngOnInit(): void { }
  images:any
  natClick() {
    this.getpic.natPics().subscribe(res => {
    this.images = res.photos.map((photo) => {
      return photo.src.original
    })
    this.share.changeImg(this.images)
    })
  }
  compClick() {
    this.getpic.compPics().subscribe(res => {
    this.images = res.photos.map((photo) => {
      return photo.src.original
    })
      this.share.changeImg(this.images)

    })
  }
  beachClick() {
    this.getpic.beachPics().subscribe(res => {
    this.images = res.photos.map((photo) => {
      return photo.src.original
    })
    this.share.changeImg(this.images)
    })
  }
  churchClick() {
    this.getpic.churchPics().subscribe(res => {
    this.images = res.photos.map((photo) => {
      return photo.src.original
    })
    this.share.changeImg(this.images)
    })
  }
  animalClick() {
    this.getpic.animalPics().subscribe(res => {
    this.images = res.photos.map((photo) => {
      return photo.src.original
    })/*  */
    this.share.changeImg(this.images)
    })
  }
  }
  //onEnter function




