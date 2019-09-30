import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/services/dispatcher.service';
import { MsAction } from 'src/app/@types/ms-action';
import { ActionTypes } from 'src/app/services/action-types.enum';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  public userInput = '';

  constructor(private dispatcher: DispatcherService) { }

  searchHandler() {
    const action: MsAction = {
      type: ActionTypes.DATA_SEARCH,
      data: this.userInput
    };
    this.dispatcher.dispatch(action).subscribe(res => console.warn(res));
  }

}
