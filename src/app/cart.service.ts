import { HttpClient } from "@angular/common/http";
import { Product } from "./products";

import { Injectable } from "@angular/core";
import { throttleTime, delay } from "rxjs";
import { tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];
  private httpClient: HttpClient;

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient
      .get<{ type: string; price: number }[]>("/assets/shipping.json")
      .pipe(
        tap((x) => console.log("json x = " + JSON.stringify(x))),
        tap((x) => console.log("json2 x = " + JSON.stringify(x)))
      );

    // .pipe(tap((x) => console.log("json x = " + JSON.stringify(x))));
  }

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
}
