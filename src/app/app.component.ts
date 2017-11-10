import { MyUsersService } from './my-users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'app';

  constructor( private srvce: MyUsersService) {
    this.rock();
  } 

  rock() {
    this.srvce.fetchData();
  }
}
