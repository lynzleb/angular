import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { SharedModule } from '../../shared/shared.module';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
    declarations: [CounterComponent, ToggleComponent],
    imports: [SharedModule],
    exports: [CounterComponent],
})
export class MiniFeaturesModule {}
