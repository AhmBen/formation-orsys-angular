import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private _collection: any[] = [];
  public letters = [...'ABCDEFGHIJKLMNOPQRSTUVWYXZ'];
  public filter = '';

  public get collection() {
    return this._collection.filter( user => {
      if (!this.filter) { return true; }
      return user.name.startsWith( this.filter );
    });
  }

  // constructor( @Inject(UserService) userService: UserService) {
  constructor( userService: UserService ) {
    this._collection = userService.users;
  }

  ngOnInit() {
  }

}
