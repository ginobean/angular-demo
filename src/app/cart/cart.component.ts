import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";
import { Product } from "../products";

/**
 *
 *
 * @export
 * @class CartComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cartContents: Product[] = [];

  checkoutForm = this.formBuilder.group({ name: "", address: "" });

  /**
   * Creates an instance of CartComponent.
   * @param {CartService} cartService
   * @param {FormBuilder} formBuilder
   * @memberof CartComponent
   */
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  /**
   *
   *
   * @memberof CartComponent
   */
  ngOnInit(): void {
    this.cartContents = this.cartService.getItems();
  }

  onSubmit(): void {
    // process checkout data here
    this.cartContents = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
