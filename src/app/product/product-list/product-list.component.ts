import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/interfaces/carModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displaycarData: Car;
  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
        this.displaycarData = this.productService.getProductByID(id);
        console.log(this.displaycarData)
      });

  }
  removeProduct(id: number) {
    this.productService.removeProductById(id);
  }
}
