import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimedPage } from './timed.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TimedPageRoutingModule } from './timed-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TimedPageRoutingModule
  ],
  declarations: [TimedPage]
})
export class TimedPageModule {}
