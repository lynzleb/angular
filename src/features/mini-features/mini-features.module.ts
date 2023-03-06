import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../app/material/material.module';

@NgModule({
    declarations: [
        CounterComponent
    ],
    imports: [
        MaterialModule,
        SharedModule,
    ],
    exports: [ CounterComponent ]
})
export class MiniFeaturesModule { }
