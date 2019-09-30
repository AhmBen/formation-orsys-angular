import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent implements OnInit {

  @Input() mode = 'valid';

  constructor() { }

  ngOnInit() {
    // console.log(this.mode);
  }

}
