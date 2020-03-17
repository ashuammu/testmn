import { Component, OnInit } from '@angular/core';
import { Model, Todoitem } from '../todoModel';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {

  model = new Model();
  constructor() { }

  ngOnInit() {
  }
  getName(){
    return this.model.user;
  }
  getItems(){
    return this.model.items.filter(item => !item.done);
  }
  addItems(newItem){
    this.model.items.push(new Todoitem(newItem, false));
  }

}
