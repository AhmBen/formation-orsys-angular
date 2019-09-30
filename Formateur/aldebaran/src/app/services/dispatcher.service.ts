import { Injectable, EventEmitter } from '@angular/core';
import { MsFacade } from '../@types/ms-facade';
import { MsAction } from '../@types/ms-action';
import { Observable, of as createObservable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActionTypes } from './action-types.enum';
import { UserManagerService } from './user-manager.service';
import { CommentManagerService } from './comment-manager.service';
import { ImageSearchService } from './image-search.service';

@Injectable()
export class DispatcherService implements MsFacade {

  public action$ = new EventEmitter<MsAction>();
  public history = [];

  constructor(
    private userService: UserManagerService,
    private commentService: CommentManagerService,
    private imageService: ImageSearchService,
  ) {
    window['appActions'] = this.history;
  }

  dispatch(action: MsAction): Observable<MsAction> {

    this.action$.emit(action);

    this.history.push(Object.assign({ time: Date.now() }, action));

    const convertToAction = result => {
      action.result = result;
      return action;
    };

    switch (action.type) {
      case ActionTypes.DATA_GET_COMMENTS:
        return createObservable(action);

      case ActionTypes.DATA_GET_HOME_CONTENT:
        return this.imageService.search('all', 4)
          .pipe(map(convertToAction));

      case ActionTypes.DATA_GET_SEARCH_CONTENT:
        return this.imageService.getCollection().pipe(map(convertToAction));

      case ActionTypes.DATA_SEARCH:
          return this.imageService.search(action.data || null, 100).pipe(map(convertToAction));

      case ActionTypes.DATA_SELECT_CONTENT:
        return this.imageService.search(action.data || null, 100)
          .pipe(map(convertToAction));

      case ActionTypes.USER_ADD_COMMENT:
        return createObservable(action);

      case ActionTypes.USER_LOGIN:
        return createObservable(action);
    }


  }


}
