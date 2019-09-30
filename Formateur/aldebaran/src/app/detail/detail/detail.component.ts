import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { MsImage } from 'src/app/@types/ms-image';
import { DispatcherService } from 'src/app/services/dispatcher.service';
import { MsAction } from 'src/app/@types/ms-action';
import { ActionTypes } from 'src/app/services/action-types.enum';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public data$: Subscription;
  public content: MsImage = null;

  constructor(
    private distpacther: DispatcherService
  ) { }

  ngOnInit() {
    const action: MsAction = {
      type: ActionTypes.DATA_SELECT_CONTENT,
      data: null
    };
    this.data$ = this.distpacther
      .dispatch(action)
      .subscribe(data => this.content = data.result[0]);
  }

  ngOnDestroy(): void {
    this.data$.unsubscribe();
  }

}
