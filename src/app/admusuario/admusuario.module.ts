import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdmusuarioPage } from './admusuario.page';

const routes: Routes = [
  {
    path: '',
    component: AdmusuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmusuarioPage]
})
export class AdmusuarioPageModule {}
