import { Observable } from 'rxjs';
/**
 * GENERIC DATA MANAGER
 */
export interface MsManager<T> {
  collection: Array<T>;

  add( item: T ): Observable<T>;

  remove( item: T ): Observable<T>;

  update( item: T , modificateur: T): Observable<T>;

}
