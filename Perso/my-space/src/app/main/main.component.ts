import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private _collection: any[] =  [];
  letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']; // les ... transforme la string qui les suit en tableau
  filter: string;

  public get collection() {
    return this._collection.filter( user => {
      if (!this.filter) { return true; }
      return user.name.startsWith( this.filter );
    });
  }

  constructor(userService: UserService) {
    this._collection = userService.users;
    this.filter = '';
  }

  ngOnInit() {
  }

}
