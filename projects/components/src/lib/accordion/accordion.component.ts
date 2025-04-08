import { trigger, transition, style, animate, AUTO_STYLE, state } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoreModule } from '../core.module';

@Component({
    selector: 'aplus-accordion',
    templateUrl: 'accordion.component.html',
    styleUrls: ['accordion.component.scss'],
    standalone: true,
    imports: [CoreModule],
    animations: [
        trigger('inOutAnimation', [
            transition(':enter', [
                style({ height: '0', opacity: '.75', overflow: 'hidden' }),
                animate('.35s ease-in-out', style({ height: AUTO_STYLE, opacity: AUTO_STYLE })),
            ]),
            transition(':leave', [
                style({ height: AUTO_STYLE, opacity: AUTO_STYLE, overflow: 'hidden' }),
                animate('.35s ease-in-out', style({ height: '0', opacity: '.25' })),
            ]),
        ]),
        trigger('scale', [
            state('false', style({ transform: 'scaleY(1)' })),
            state('true', style({ transform: 'scaleY(-1)' })),
            transition('false <=> true', [
                animate('250ms ease-in-out')
            ])
        ])
    ],
})

export class AplusAccordionComponent implements OnInit {
    @Input() expand = false;
    @Input() heading = '';
    @Input() icon = '';
    @Output() expandChange = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }

    toggle() {
        this.expand = !this.expand;
        this.expandChange.emit(this.expand);
    }
}