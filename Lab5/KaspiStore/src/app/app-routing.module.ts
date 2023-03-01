import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductCategoriesComponent} from "./product-categories/product-categories.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductItemComponent} from "./product-item/product-item.component";

const routes: Routes = [
  {
    path: '',
    component: ProductCategoriesComponent
  },
  {
    path: 'products/:type',
    component: ProductListComponent
  },
  {
    path: 'products/:type/:itemId',
    component: ProductItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
