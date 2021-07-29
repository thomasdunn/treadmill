import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManualPage } from './manual.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ManualPageRoutingModule } from './manual-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ManualPageRoutingModule
  ],
  declarations: [ManualPage]
})
export class ManualPageModule {}
