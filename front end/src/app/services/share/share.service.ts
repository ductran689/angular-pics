import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pic } from 'src/app/pic.model';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  //images Api
  private imagesApi = new BehaviorSubject('');
  setImagesApi = this.imagesApi.asObservable();
  // flag
  public flag = new BehaviorSubject(false);
  setFlag = this.flag.asObservable();
  // isLogined
  public isLogined = new BehaviorSubject<boolean>(false);
  setIsLogined = this.isLogined.asObservable();

  constructor() {}
  // set imagesApi
  changeImg(images: any) {
    this.imagesApi.next(images);
  }
  //set Flag
  changeFlag(flag: boolean) {
    this.flag.next(flag);
  }
  toggleLogined(isLogined: boolean) {
    this.isLogined.next(isLogined);
  }
}
