import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllePageRoutingModule } from './alle-routing.module';

import { AllePage } from './alle.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllePageRoutingModule,
    SharedModule
  ],
  declarations: [AllePage]
})
export class AllePageModule {}
