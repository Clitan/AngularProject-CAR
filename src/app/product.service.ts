import { Injectable } from '@angular/core';
import { Car } from './interfaces/carModel';
import { CARDATA } from './db-data';
import { CARBRANDS } from '../app/Datset/carBrand-db'
import { CarBrandModel } from './interfaces/carBrandModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  carData: Car[];
  brandData: CarBrandModel[];
  product_OR_brand = 1;


  constructor() {
    this.carData = CARDATA;
    this.brandData = CARBRANDS;
  }

  getProducts() {
    return this.carData;
  }

  getBrands() {
    return this.brandData;
  }

  addProductOrUpdate(id: number, newset: Car) {
    let carID = null;
    id == -1 ? carID = (this.carData.length) + 1 : carID = id
    if (id == -1) this.carData.push(newset);
    else {
      for (let i = 0; this.carData.length > i; i++) {
        if (this.carData[i].id === id)
          return this.carData[i];
      }
    }
  }

  getProductByID(getid: number) {
    for (let i = 0; this.carData.length > i; i++) {
      if (this.carData[i].id === getid)
        return this.carData[i];
    }
  }

  removeProductById(Useid: number) {
    for (let i = 0; this.carData.length > i; i++) {
      if (this.carData[i].id === Useid)
        this.carData.splice(i, 1);
    }
  }
  addNewBrand(addNewBrand: string) {
    var newCarBrand = {
      brandId: this.brandData.length + 1,
      brandName: addNewBrand
    }
    this.brandData.push(newCarBrand);
  }

}
