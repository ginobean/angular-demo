import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})


export class ProductAlertsComponent {

  @Input() currentProduct: Product | undefined;
  @Output() notify = new EventEmitter();

  // notifyMe() {
  //   console.log("got notifyMe cb in ProductAlertsComponent..");
  //   console.log("product name = " + this.currentProduct?.name);
  //   // console.log("p name = " + p.name);
  // }

}
