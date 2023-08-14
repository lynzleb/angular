import { Component } from '@angular/core';
import { StateDisplayService } from './state-display.service';

@Component({
  selector: 'app-state-display',
  templateUrl: './state-display.component.html',
  styleUrls: ['./state-display.component.scss'],
  providers: [StateDisplayService],
})
export class StateDisplayComponent {
  displayString$;

  constructor(private service: StateDisplayService) {
    this.displayString$ = this.service.getCount();
  }

  onClick(): void {
    this.displayString$ = this.service.getCount();
  }
}
