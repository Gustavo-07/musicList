import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallemusicaPageRoutingModule } from './detallemusica-routing.module';

import { DetallemusicaPage } from './detallemusica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallemusicaPageRoutingModule
  ],
  declarations: [DetallemusicaPage]
})
export class DetallemusicaPageModule {}
