import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { DetailCommentListComponent } from './detail-comment-list/detail-comment-list.component';
import { DetailCommentInputComponent } from './detail-comment-input/detail-comment-input.component';
import { DetailCommentLoginComponent } from './detail-comment-login/detail-comment-login.component';



@NgModule({
  declarations: [DetailComponent, DetailCommentComponent, DetailCommentListComponent, DetailCommentInputComponent, DetailCommentLoginComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DetailComponent]
})
export class DetailModule { }
