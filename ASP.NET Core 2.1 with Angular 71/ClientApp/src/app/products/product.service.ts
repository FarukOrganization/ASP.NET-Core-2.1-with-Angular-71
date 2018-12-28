import { IProduct } from "./IProduct";
import { Injectable } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
//import { Observable } from "rxjs/Observable";
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})

export class ProductService {

  productUrl: string = "http://localhost:29164/api/products";

    constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(tap(data => console.log('All' + JSON.stringify(data))),catchError(this.handleError));
  }

  getProductbyId(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.productUrl + "/" + id).pipe(tap(data => console.log('All' + JSON.stringify(data))), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred ${err.error.message}`;
    }
    else {
      errorMessage = `Server returned code ${err.status}, error message is ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
    //getProducts(): IProduct[] {

    //    return [
    //        {
    //            "Code": "Comp-001",
    //            "Product": "Computer",
    //            "Available": true,
    //            "Price": 35.5,
    //            "Rating": 4,
    //            "ImageUrl": "https://openclipart.org/download/265342/COMPUTADOR.svg"
    //        },
    //        {
    //            "Code": "Lap-002",
    //            "Product": "Laptop",
    //            "Available": true,
    //            "Price": 55.5,
    //            "Rating": 5,
    //            "ImageUrl": "https://openclipart.org/download/204064/Happy-Computer.svg"
    //        },
    //        {
    //            "Code": "Tablet-003",
    //            "Product": "Tablet",
    //            "Available": true,
    //            "Price": 66.5,
    //            "Rating": 3.5,
    //            "ImageUrl": "https://openclipart.org/download/178889/1370290172.svg"
    //        },
    //        {
    //            "Code": "TabletPen-003",
    //            "Product": "TabletPen",
    //            "Available": true,
    //            "Price": 77.5,
    //            "Rating": 3.0,
    //            "ImageUrl": "https://openclipart.org/download/5416/tonyk-Tablet-Pen.svg"
    //        }
    //    ];
    //}

}
