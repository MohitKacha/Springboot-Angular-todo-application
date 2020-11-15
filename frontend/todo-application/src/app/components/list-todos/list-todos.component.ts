import { Todo } from './../../class/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos = [
    new Todo(1,"todo 1",false,new Date()),
    new Todo(2,"todo 2",true,new Date()),
    new Todo(3,"todo 3",false,new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
