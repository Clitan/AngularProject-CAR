import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';


const routes: Routes = [
  //   { path : 'home',component : HomeComponent,children:[
  //       { path :'product',component:ProductListComponent,children:[
  //         { path :'Add',component:ProductAddComponent}
  //       ]}
  //   ]
  // }

  { path: '', component: HomeComponent },
  { path: 'view/edit/:id', component: ProductAddComponent },
  { path: 'view/:id', component: ProductListComponent },
  { path: 'add', component: ProductAddComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
