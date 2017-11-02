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
     //this.todos = [];
     this.todos = (JSON.parse(localStorage.getItem("todos")))?(JSON.parse(localStorage.getItem("todos"))):[];
   }
  addTodo(event) {
      this.todoObj = {
        newTodo: this.newTodo,
        completed: false
      }
      this.todos.push(this.todoObj);
      localStorage.setItem("todos", JSON.stringify(this.todos));
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

  statusChange(event){
      if(event.target){
         localStorage.setItem("todos", JSON.stringify(this.todos));
      }
  }

  deleteSelectedTodos() {
      //need ES5 to reverse loop in order to splice by index
      for(var i=(this.todos.length -1); i > -1; i--) {
        if(this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
}
