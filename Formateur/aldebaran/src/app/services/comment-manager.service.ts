import { Injectable } from '@angular/core';
import { MsManager } from '../@types/ms-manager';
import { MsComment } from '../@types/ms-comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentManagerService implements MsManager<MsComment> {
  collection: MsComment[];

  constructor() { }

  add(item: MsComment): Observable<MsComment> {
    throw new Error("Method not implemented.");
  }
  remove(item: MsComment): Observable<MsComment> {
    throw new Error("Method not implemented.");
  }
  update(item: MsComment, modificator: MsComment): Observable<MsComment> {
    throw new Error("Method not implemented.");
  }


}
