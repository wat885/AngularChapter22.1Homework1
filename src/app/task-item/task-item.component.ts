import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Task } from'../task';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()
  task: Task;
  productList: ProductListComponent;

  @Output()
  OnSelected: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.OnSelected.emit(this.task); 
  }

}
