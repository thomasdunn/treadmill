import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'timed',
        loadChildren: () => import('../timed/timed.module').then(m => m.TimedPageModule)
      },
      {
        path: 'program',
        loadChildren: () => import('../program/program.module').then(m => m.ProgramPageModule)
      },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/timed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/timed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
