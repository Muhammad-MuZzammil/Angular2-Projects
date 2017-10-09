import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  addTask(add) {

    console.log(add.value)
    this.tasks.push(add.value);
    add.value = '';
  }

  dltTodo(index) {

    this.tasks.splice(index, 1)
  }

  editTodo(addTodo, index, task) {
    addTodo.value = task
    this.tasks.splice(index, 1)


  }
}
