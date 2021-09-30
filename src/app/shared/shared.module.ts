import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports: [
    MenuBarComponent
  ]
})
export class SharedModule { }
