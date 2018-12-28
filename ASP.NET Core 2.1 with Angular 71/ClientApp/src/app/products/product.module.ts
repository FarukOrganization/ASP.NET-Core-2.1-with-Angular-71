import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { StarComponent } from '../../Shared/starcomponent/star.component';
import { ConvertToSpace } from '../../Shared/convert-to-space.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [ProductListComponent,
    StarComponent,
    ConvertToSpace,
    ProductDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
    ])
  ],
  providers: [ProductDetailGuard]
})
export class ProductModule { }
