import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TodoHomework1';
  // @ViewChild('productList', { static: true })
  // productList: ProductListComponent;

  // @Input()
  // name: string;
  // description: string;

  // addTask() {
  //   // console.log(this.productList.tasks)
  //   // console.log(this.name)
  //   // console.log(this.description)
  //   this.productList.tasks.push(
  //     {
  //       id: 3,
  //       name: this.name,
  //       description: this.description,
  //     }
  //   )
  // }

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


}
