import { Injectable } from '@angular/core';
import { MsManager } from '../@types/ms-manager';
import { MsUser } from '../@types/ms-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService implements MsManager<MsUser> {
  collection: MsUser[];

  constructor() { }

  add(item: MsUser): Observable<MsUser> {
    throw new Error("Method not implemented.");
  }
  remove(item: MsUser): Observable<MsUser> {
    throw new Error("Method not implemented.");
  }
  update(item: MsUser, modificator: MsUser): Observable<MsUser> {
    throw new Error("Method not implemented.");
  }


}
