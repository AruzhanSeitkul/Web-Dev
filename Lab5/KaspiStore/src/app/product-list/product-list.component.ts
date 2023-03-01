import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  products: any = []
  category: string = ""
  constructor(private prodService: ProductsService, private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit():void {
    this.category = this.activatedRoute.snapshot.params["type"]
    // console.log(this.activatedRoute)
    this.products = this.prodService.categories.find(c => c.name === this.category).products

  }

  shareWithTelegram(i: number) {
    document.location.href = "https://t.me/share/url?url=" + this.products[i].link
  }

  goToPage(i: number) {
    this.router.navigate([`products/${this.category}/${i}`])
  }

  removeItem(i: number) {
    this.products.splice(i,1);
    this.prodService.categories.find(item => item.name === this.category).products = this.products
  }

  increaseLike(i:number) {
    this.products[i].likes = this.products[i].likes + 1
  }
}
