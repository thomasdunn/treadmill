import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgramPage } from './program.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProgramPageRoutingModule } from './program-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProgramPageRoutingModule
  ],
  declarations: [ProgramPage]
})
export class ProgramPageModule {}
