import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from '../interfaces/todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  toDoList: ToDo[] = [
    {
    task: "clean room",
    completed: false
    },
    {
    task: "laundry",
    completed: true
    },
    {
    task: "homework",
    completed: false
    },
    {
    task: "get groceries",
    completed: false
    },
    {
    task: "make to do list in Angular",
    completed: false
    },
  ]

  searchTerm: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  completeTask = (task: ToDo):void => {
    task.completed = !task.completed;
    // this.toDoList.forEach(()=>{
    //   if (){
    //     this.toDoList[] = []
    //   }
    // })
  }

  deleteTask = (index: number): void => {
    this.toDoList.splice(index, 1);
  }

  addTask = (form: NgForm): void =>{
    console.log(form);
    
    let newTask: ToDo = {
    task: form.form.value.addTask,
    completed: false
    }
    this.toDoList.push(newTask);
  }

  setSearchTerm = (form: NgForm): void => {
    this.searchTerm = form.form.value.filter;
  }

  filterTasks = (task: string): ToDo[] => {
    return this.toDoList.filter((item)=>{
      let currentItem = item.task.toLowerCase().trim()
      return currentItem.includes(task.toLowerCase().trim())
    })
  }

}
