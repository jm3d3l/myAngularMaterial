import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyUsersService {

 mydata: any;
  fethdata = [];
  constructor(private http: Http) { 
    this.fetchData();
  }

  fetchData() {
    this.http.get('../assets/data/users.json').map( res => {
      this.mydata = res.json();
      console.log('this is res');
      console.log(this.mydata);
    }).subscribe(data => {
      console.log(data);
    })
}
}