import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimedPage } from './timed.page';

const routes: Routes = [
  {
    path: '',
    component: TimedPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimedPageRoutingModule {}
