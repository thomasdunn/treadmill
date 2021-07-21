import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { C25KPage } from './c25k.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { C25KPageRoutingModule } from './c25k-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    C25KPageRoutingModule
  ],
  declarations: [C25KPage]
})
export class C25KPageModule {}
