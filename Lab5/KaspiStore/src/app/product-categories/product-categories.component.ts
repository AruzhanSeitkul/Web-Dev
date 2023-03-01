import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit{
  categories: any = []
  constructor(private prodService: ProductsService, private router: Router) {
  }

  ngOnInit(): void {
    this.categories = this.prodService.categories
  }


  goToList(category: any) {
    this.router.navigate(["products/" + category.name])
  }
}
