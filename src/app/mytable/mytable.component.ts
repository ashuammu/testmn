import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export class User {
    id: number;
    title: string;
    author: string;
  }

@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      'id': [''],
      'title': [''],
      'author': ['']
       });
  }
}
