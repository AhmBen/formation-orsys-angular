import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetService {

  constructor(private http: HttpClient) { }

  get( url: string ): Observable<any> {
    return this.http.get(url).pipe( catchError(error => {
      console.warn(error);
      return [];
    }));
  }

  post(url:string, payload: any): Observable<any>{
    throw "NOT IMPLEMENTED";

  }

}
