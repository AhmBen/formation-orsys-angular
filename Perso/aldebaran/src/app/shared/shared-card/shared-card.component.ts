import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent implements OnInit {


  @Input() url = '';
  @Input() button = '';
  @Output() cardAction = new EventEmitter<boolean>(); // Pour la réponse au composant parent

  ngOnInit() {
  }

  clickHandler() {
    this.cardAction.emit(true);
  }

}
