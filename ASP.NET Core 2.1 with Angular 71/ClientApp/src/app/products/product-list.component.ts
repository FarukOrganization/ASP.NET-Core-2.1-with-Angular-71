import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-productlist',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {

      this.productService.getProducts().subscribe(products => {
        this.products = products;
        this.filteredProducts = this.products;
      }, error => this.errorMessage = <any>error);
        //this.products = this.productService.getProducts();
        //this.filteredProducts = this.products;
        this.filterBy = "Comp";
    }

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    _filterBy: string = "";

    get filterBy(): string {
        return this._filterBy;
    }

    set filterBy(value: string) {
        this._filterBy = value;
        this.filteredProducts = this._filterBy ? this.DoProductsFilter(this._filterBy) : this.products;
    }

    DoProductsFilter(filterby: string): IProduct[] {
        return this.products.filter((product: IProduct) => product.code.toLowerCase().indexOf(filterby.toLowerCase()) !== -1);
    }
    
    OnRatingClicked(data: string): void {
        this.pageTitle = "Product List : " + data;
    }

    errorMessage: string;
  filteredProducts: IProduct[] = [];
  products: IProduct[]=[];
    //= [
    //    {
    //        "Code": "Comp-001",
    //        "Product": "Computer",
    //        "Available": true,
    //        "Price" : 35.5,
    //        "Rating": 4,
    //        "ImageUrl": "https://openclipart.org/download/265342/COMPUTADOR.svg"
    //    },
    //    {
    //        "Code": "Lap-002",
    //        "Product": "Laptop",
    //        "Available": true,
    //        "Price": 55.5,
    //        "Rating": 4.5,
    //        "ImageUrl": "https://openclipart.org/download/204064/Happy-Computer.svg"
    //    }
    //];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
