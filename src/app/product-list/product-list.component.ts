import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { Task } from'../task';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  tasks: Task[];
  // @ViewChild('productList', { static: true })
  // productList: ProductListComponent;

  @Input()
  name: string;
  description: string;

  addTask() {
    // console.log(this.productList.tasks)
    // console.log(this.name)
    // console.log(this.description)
    this.tasks.push(
      {
        id: 3,
        name: this.name,
        description: this.description,
      }
    )
  }

  constructor() {
    this.tasks = [];
    this.tasks = [
      {
        id: 1,
        name: 'Task1',
        description: 'Lorem ipsum dolor '
      },
      {
        id: 2,
        name: 'Task2',
        description: 'Lorem ipsum dolor '
      }
    ]
   }

  ngOnInit(): void {
    // this.productList.tasks = [
    //   {
    //     id: 1,
    //     name: 'Task1',
    //     description: 'Lorem ipsum dolor '
    //   },
    //   {
    //     id: 2,
    //     name: 'Task2',
    //     description: 'Lorem ipsum dolor '
    //   }
    // ]
  }

  selectedProduct(product: Task) {
    // alert(`Product ${product.name} selected`);

    this.tasks = this.tasks.filter(task => task != product)
   }
}
