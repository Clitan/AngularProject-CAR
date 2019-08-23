import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Car } from '../interfaces/carModel'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carData: Car[];
  addnewBrand: string;
  product_or_brand = 1;

  constructor(private productService: ProductService) {
    this.carData = productService.getProducts();
    console.log(this.carData)
  }
  ngOnInit() {
    this.productService.product_OR_brand = 1;
  }

  addNewBrand() {
    this.productService.addNewBrand(this.addnewBrand);
    alert(this.addnewBrand+" added sucessfuly")
    this.addnewBrand = "";
    this.product_or_brand = 1;
  }
  setflag() {
    this.productService.product_OR_brand = this.product_or_brand;
  }

}
