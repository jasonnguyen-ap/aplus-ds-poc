import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplusButtonComponent } from './button/button.component';
import { AplusAccordionComponent } from './accordion/accordion.component';

@NgModule({
  imports: [CommonModule, AplusButtonComponent, AplusAccordionComponent],
  declarations: [],
  exports: [AplusButtonComponent, AplusAccordionComponent]
})
export class AplusComponentsModule { } 