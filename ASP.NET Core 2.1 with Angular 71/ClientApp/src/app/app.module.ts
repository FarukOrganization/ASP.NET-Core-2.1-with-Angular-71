import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
//import { ProductListComponent } from './products/product-list.component';
//import { ConvertToSpace } from './../Shared/convert-to-space.pipe';
//import { StarComponent } from './../Shared/starcomponent/star.component';
//import { ProductService } from './products/product.service';
//import { ProductDetailComponent } from './products/product-detail.component';
//import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent//,
    //ProductListComponent,
    //StarComponent,
    //ConvertToSpace,
    //ProductDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    ProductModule,
    //HttpClientModule,
    //FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent }//,
      //{ path: 'products', component: ProductListComponent },
      //{ path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
    ])
  ],
  //providers: [ProductDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
