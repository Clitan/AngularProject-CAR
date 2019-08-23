import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/interfaces/carModel';
import { CarBrandModel } from 'src/app/interfaces/carBrandModel';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {
  feathCarData: Car;
  newData = true;
  addBrand = true;
  display_Car: Car;
  carBrands: CarBrandModel[];

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        if (params.get('id')) {
          this.addBrand = false;
          let id = +params.get('id');
          this.feathCarData = this.productService.getProductByID(id);
          this.display_Car = this.feathCarData;
        }
        else
          this.addBrand = true;
      });
  }

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.carBrands = productService.getBrands();

    this.display_Car={
      id: productService.carData.length+1,
      CarName: "",
      carModel:"",
      carPrice:"",
      CarBrand:0,
      imgUrl: '',
      Description: "",
  }
  }

  getData() {
    this.addBrand ? this.productService.addProductOrUpdate(-1, this.display_Car) :
      this.productService.addProductOrUpdate(this.feathCarData.id - 1, this.display_Car)
  }
}
