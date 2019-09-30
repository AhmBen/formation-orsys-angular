import { Injectable } from '@angular/core';
import { Observable, of as createObservable } from 'rxjs';
import { MsImage } from '../@types/ms-image';

import { NetService } from './net.service';
import { environment } from 'src/environments/environment';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {

  private cache = new Map();
  private collection = [];
  private _keyword = 'all'
  get keyword() {
    return this._keyword;
  }
  set keyword(value) {
    if(value == 'nibiru') return;
    this._keyword = value;
  }
  constructor( private net: NetService ) {
    window['ImageSearchService'] = this;
   }

  search(keyword = this.keyword, limit = 100): Observable<MsImage[]> {

    if(keyword) this.keyword = keyword;
    /*
    if (this.cache.has(keyword)) {
      console.log('You have Been Norrised')
      return createObservable(this.cache.get(keyword).splice(0,limit));
    } */

    const conformData = items => items.map(item => {
      const mappedItem: MsImage = {
        title: item.data[0].title,
        descritpion: item.data[0].description,
        comments: [],
        url: item.links[0].href
      };
      return mappedItem;
    });

    return this.net.get(environment.NASA_API + keyword)
                  .pipe(
                    map(response => response.collection.items),
                    map(conformData),
                    tap( data => {
                      this.cache.set(keyword, data);
                      this.collection.length = 0;
                      this.collection.push(...data);
                      //console.log(this.cache);
                    }),
                    map( images => images.splice(0, limit))
                  );

  }

  getCollection(): Observable<MsImage[]> {
      return createObservable(this.collection);
  }
}
