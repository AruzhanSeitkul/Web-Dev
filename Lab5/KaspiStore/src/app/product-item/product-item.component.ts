import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{

  product: any ={}
  productId: number = 0
  categoryName: string = ""
  constructor(private prodService: ProductsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.categoryName = this.activatedRoute.snapshot.params["type"]
    this.productId = this.activatedRoute.snapshot.params["itemId"]
    this.product = this.prodService.categories.find(c=>c.name === this.categoryName).products[this.productId]
  }


  changeImg(img: string) {
    this.product.img = img
  }


  shareWithTelegram(link:  string) {
    document.location.href = "https://t.me/share/url?url=" + link
  }
}
