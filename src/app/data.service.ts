import { Injectable } from '@angular/core';
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
 import { IPosts } from './person';

@Injectable()
export class DataService {
  constructor(private http:Http) { }
  getPosts(): Observable<Object> {
         return this.http
             .get('https://jsoneditoronline.herokuapp.com/v1/docs/7d1144556dcbcb6d207e23474dc78a8a')
             .map((response: Response) => {
                 return response.json();
             })
             .catch(this.handleError);
     }
  private handleError(error: Response) {
         return Observable.throw(error);
     }
}
@Injectable()
 export class ApiService {
 
     private _postsURL = "https://jsoneditoronline.herokuapp.com/v1/docs/7d1144556dcbcb6d207e23474dc78a8a";
 
     constructor(private http: Http) {
     }
 
     getPosts(): Observable<IPosts[]> {
         return this.http
             .get(this._postsURL)
             .map((response: Response) => {
                 return <IPosts[]>response.json();
             })
             .catch(this.handleError);
     }
     getFoods() {
      return this.http.get('../assets/imagesObject.json').map((res:Response) => res.json());
     }
     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 }
