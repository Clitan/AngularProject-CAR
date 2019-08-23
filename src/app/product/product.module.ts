import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormsModule} from '@angular/forms'
import { ProductService } from '../product.service';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ProductListComponent, ProductAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:[
    ProductService
  ]
})
export class ProductModule { }
