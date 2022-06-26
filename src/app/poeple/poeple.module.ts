import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoepleRoutingModule } from './poeple-routing.module';
import { PoepleComponent } from './poeple.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    PoepleComponent
  ],
  imports: [
    CommonModule,
    PoepleRoutingModule,
    AgGridModule,
    HttpClientModule
  ]
})
export class PoepleModule { }
