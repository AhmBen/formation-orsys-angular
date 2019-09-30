import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent {

  @Input() url = '';
  @Input() btnText = '';
  @Output() cardAction = new EventEmitter<boolean>();

  clickHandler( data ) {
    // console.log( data );
    this.cardAction.emit(true);
  }

}
