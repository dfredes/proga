import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pag1PageRoutingModule } from './pag1-routing.module';

import { Pag1Page } from './pag1.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pag1PageRoutingModule
  ],
  declarations: [Pag1Page, MenuComponent]
})
export class Pag1PageModule {}
