import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditvidrariaPage } from './editvidraria.page';

const routes: Routes = [
  {
    path: '',
    component: EditvidrariaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditvidrariaPage]
})
export class EditvidrariaPageModule {}
