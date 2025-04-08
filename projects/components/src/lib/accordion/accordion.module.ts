import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplusAccordionComponent } from './accordion.component';

@NgModule({
  imports: [CommonModule, AplusAccordionComponent],
  exports: [AplusAccordionComponent]
})
export class AplusAccordionModule { } 