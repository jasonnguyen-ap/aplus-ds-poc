import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplusButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule, AplusButtonComponent],
  exports: [AplusButtonComponent]
})
export class AplusButtonModule { } 