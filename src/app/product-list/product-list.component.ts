import { Component } from "@angular/core";

import { of } from "rxjs";
import { from } from "rxjs";
import { delay, map, tap } from "rxjs";
import { products } from "../products";
import { OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products = [...products];

  share(event: Event) {
    window.alert("The product has been shared! event=" + event);
  }

  onNotify() {
    window.alert("You will be notified when this product goes on sale!");
  }

  async longFunc() {
    console.log("testing long function..");
    // of(1, 2, 3)
    from([1, 2, 3, 4, 5, 6])
      .pipe(
        delay(3000),
        tap((val) => console.log("tapped val = " + val))
        // delay(3000)
      )
      .subscribe((v) => console.log("subscribed event result = " + v));

    console.log("finished log function..");
  }

  ngOnInit(): void {
    console.log("invoked longFunc()");
    this.longFunc();
    console.log("finished invoking async longFunc()");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
