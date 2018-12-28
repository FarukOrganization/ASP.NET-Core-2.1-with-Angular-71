import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { HttpClient } from 'selenium-webdriver/http';
import { ProductService } from './product.service';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product detail";
  productId: number;
  errorMessage: string;
  imageWidth: number = 300;
  imageMargin: number = 2;
  Product: IProduct;//= {
  //  "code": "Comp-001",
  //  "product": "Computer",
  //  "available": true,
  //  "price": 35.5,
  //  "rating": 4,
  //  "imageUrl": "https://openclipart.org/download/265342/COMPUTADOR.svg"
  //};

  constructor(private productservice: ProductService, private routeactivated: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.productId = +this.routeactivated.snapshot.paramMap.get('id');
    this.productservice.getProductbyId(this.productId).subscribe(product => this.Product = product,
      error => this.errorMessage = <any>error
    );    
  }

  OnBack() {
    this.router.navigate(['products']);
  }

}
