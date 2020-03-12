import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule,MatSortModule, MatPaginatorModule} from '@angular/material';

const MaterialComponents=[  
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
