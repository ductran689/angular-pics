import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pic } from 'src/app/pic.model';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'Application/json'})
}
const apiurl: string = 'https://jsonplaceholder.typicode.com/todos/20';
@Injectable({
  providedIn: 'root',
})
export class GetPicsService {
  constructor(private http: HttpClient) {}

  getPics(): Observable<Pic> {

    return this.http.get<Pic>(apiurl);
  }
}
