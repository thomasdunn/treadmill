import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C25KPage } from './c25k.page';

const routes: Routes = [
  {
    path: '',
    component: C25KPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C25KPageRoutingModule {}
