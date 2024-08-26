import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { IonicModule } from '@ionic/angular';

import { PerfilesPageRoutingModule } from './perfiles-routing.module';

import { PerfilesPage } from './perfiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PerfilesPage]
})
export class PerfilesPageModule {}
