import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pic } from 'src/app/pic.model';

@Injectable({
  providedIn: 'root'
})
export class ShareService {


  private imagesApi = new BehaviorSubject('')
  setImagesApi = this.imagesApi.asObservable()

  constructor() { }

  changeImg(images: any) {
    this.imagesApi.next(images)

  }
}
