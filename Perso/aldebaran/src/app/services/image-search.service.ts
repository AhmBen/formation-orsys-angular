import { Injectable } from '@angular/core';
import { Observable, of as createObservable} from 'rxjs';
import { MsImage } from '../@types/ms-image';

import { NetService } from './net.service';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {

  private cache = new Map();
  private _keyword = 'all';
  get keyword() {
    return this._keyword;
  }

  set keyword(value) {
    if(value === 'nibiru') { return; } /* Ne pas prendre en compte cette recherche */
    this._keyword = value;
  }

  constructor( private net: NetService ) { }

  search(keyword = this.keyword, limit = 100): Observable<MsImage[]> {

    const conformData = items => items.map(item => {
      const mappedItem: MsImage = {
        title: item.data[0].title,
        description: item.data[0].description,
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
                    }),
                    map( images => images.splice(0, limit))
                  );

  }
}
