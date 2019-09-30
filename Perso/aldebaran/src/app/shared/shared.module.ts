import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCardComponent } from './shared-card/shared-card.component';
import { SharedButtonComponent } from './shared-button/shared-button.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SharedCardComponent, SharedButtonComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SharedCardComponent,
    SharedButtonComponent,
    FormsModule
  ]
})
export class SharedModule { }
