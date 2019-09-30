import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MsImage } from 'src/app/@types/ms-image';
import { DispatcherService } from 'src/app/services/dispatcher.service';
import { MsAction } from 'src/app/@types/ms-action';
import { ActionTypes } from 'src/app/services/action-types.enum';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public data$: Subscription;
  public content: MsImage[] = [];

  constructor(
    private distpacther: DispatcherService
  ) { }

  ngOnInit() {
    setTimeout( ()=> this.getListContent());

    this.distpacther.action$.subscribe( (action: MsAction) => {
      if ( action.type == ActionTypes.DATA_SEARCH) {
        this.getListContent(action.data);
      }
    });
  }

  getListContent(keyword = '' ){
    const action: MsAction = {
      type: ActionTypes.DATA_GET_SEARCH_CONTENT,
      data: keyword
    };
    this.data$ = this.distpacther
      .dispatch(action)
      .subscribe(data => this.content = data.result);
  }

  ngOnDestroy(): void {
    this.data$.unsubscribe();
  }

}
