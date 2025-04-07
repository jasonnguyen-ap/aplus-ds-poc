import { Component, Input } from '@angular/core';
import { CoreModule } from '../core.module';
@Component({
  selector: 'aplus-button',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './aplus-button.component.html',
  styleUrls: ['./aplus-button.component.scss']
})
export class AplusButtonComponent {
  @Input() variant: 'primary' | 'positive' = 'primary';
  @Input() leadingIcon: string = '';
  @Input() trailingIcon: string = '';
} 