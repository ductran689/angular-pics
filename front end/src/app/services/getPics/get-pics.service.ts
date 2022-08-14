import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pic } from 'src/app/pic.model';

@Injectable({
  providedIn: 'root',
})
export class GetPicsService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/json',
      Authorization: '563492ad6f91700001000001905834ecaee8421a98a3168f71806b6e',
    }),
  };
  apiurl: string = 'https://api.pexels.com/v1/photos/2014422';
  naturl: string = 'https://api.pexels.com/v1/search?query=nature&per_page=12';
  compurl: string =
    'https://api.pexels.com/v1/search?query=computer&per_page=12';
  beachurl: string = 'https://api.pexels.com/v1/search?query=beach&per_page=12';
  churchurl: string =
    'https://api.pexels.com/v1/search?query=church&per_page=12';
  animalurl: string =
    'https://api.pexels.com/v1/search?query=animal&per_page=12';
  getPics(): Observable<any> {
    return this.http.get<any>(this.apiurl, {
      headers: this.httpOptions.headers,
    });
  }
  natPics(): Observable<any> {
    return this.http.get<any>(this.naturl, {
      headers: this.httpOptions.headers,
    });
  }
  compPics(): Observable<any> {
    return this.http.get<any>(this.compurl, {
      headers: this.httpOptions.headers,
    });
  }
  beachPics(): Observable<any> {
    return this.http.get<any>(this.beachurl, {
      headers: this.httpOptions.headers,
    });
  }
  churchPics(): Observable<any> {
    return this.http.get<any>(this.churchurl, {
      headers: this.httpOptions.headers,
    });
  }
  animalPics(): Observable<any> {
    return this.http.get<any>(this.animalurl, {
      headers: this.httpOptions.headers,
    });
  }
}
