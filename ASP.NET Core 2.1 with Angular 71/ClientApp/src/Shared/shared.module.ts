import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpace } from './convert-to-space.pipe';
import { StarComponent } from './starcomponent/star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StarComponent,
    ConvertToSpace],
  imports: [
    CommonModule,
    FormsModule    
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpace
  ]
})
export class SharedModule { }
