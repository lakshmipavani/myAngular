import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  //declaring all required variables
		  newTodo: string;
		  todos: any;
		  todoObj: any;
		  convert:number =0;
  constructor() {
     this.newTodo = '';
     this.todos = [];
   }
  addTodo(event) {
      this.todoObj = {
        newTodo: this.newTodo,
        completed: false
      }
      this.todos.push(this.todoObj);
      this.newTodo = '';
      event.preventDefault();
  }
  ngOnInit() {
  }

  displayConverted(event){
	    this.convert=1;
	    event.preventDefault();
  }
 displayReverter(event){
        this.convert=0;
	    event.preventDefault();
 }
}
