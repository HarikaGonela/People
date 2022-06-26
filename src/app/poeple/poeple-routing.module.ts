import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoepleComponent } from './poeple.component';

const routes: Routes = [
  { path: '', component: PoepleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoepleRoutingModule { }
