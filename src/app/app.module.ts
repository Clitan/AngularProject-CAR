import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { CarCardsComponent } from './home/car-cards/car-cards.component';
import { FormsModule} from '@angular/forms'
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent],
  exports:[
    AppRoutingModule,
  ]
})
export class AppModule { }
