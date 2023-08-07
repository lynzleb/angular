import { Component } from '@angular/core';
import { StateDisplayService } from './state-display.service';

@Component({
    selector: 'app-state-display',
    templateUrl: './state-display.component.html',
    styleUrls: ['./state-display.component.scss'],
    providers: [StateDisplayService],
})
export class StateDisplayComponent {
    displayString$ = this.service.displayString$;

    constructor(private service: StateDisplayService) {}
}
