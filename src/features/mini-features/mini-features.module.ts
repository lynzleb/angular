import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { SharedModule } from '../../shared/shared.module';
import { ToggleComponent } from './toggle/toggle.component';
import { StateDisplayComponent } from './state-display/state-display.component';

@NgModule({
    declarations: [CounterComponent, ToggleComponent, StateDisplayComponent],
    imports: [SharedModule],
    exports: [CounterComponent, StateDisplayComponent],
})
export class MiniFeaturesModule {}
