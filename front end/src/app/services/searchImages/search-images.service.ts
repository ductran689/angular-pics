import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchImagesService {

  constructor(private http: HttpClient) { }
  // create header for request
  httpOptions = {
    headers: new HttpHeaders({
      Authorization:'563492ad6f91700001000001905834ecaee8421a98a3168f71806b6e'
    })
  }



}
