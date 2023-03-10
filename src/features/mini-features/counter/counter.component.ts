import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})

export class CounterComponent {
    value = 0;

    onIncrementValue(): void {
        ++this.value;
    }

    onDecrementValue(): void {
        --this.value;
    }
}
