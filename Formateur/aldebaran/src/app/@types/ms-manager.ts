import { Observable } from 'rxjs';

/**
 * Generic Data Manager
 */
export interface MsManager<T> {

  collection: Array<T>;


  add( item: T): Observable<T>;

  remove(item: T): Observable<T>;

  update(item: T, modificator: T): Observable<T>;

}
