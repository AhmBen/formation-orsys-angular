import { Component } from '@angular/core';
import { DispatcherService } from './services/dispatcher.service';
import { Router } from '@angular/router';
import { MsAction } from './@types/ms-action';
import { ActionTypes } from './services/action-types.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private dispatcher: DispatcherService,
    private router: Router) {

    this.dispatcher.action$.subscribe((action: MsAction) => {
      if (action.type === ActionTypes.DATA_SEARCH) {
        this.router.navigate(['list']);
      }
    });
  }
}
