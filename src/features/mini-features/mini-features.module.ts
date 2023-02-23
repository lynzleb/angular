import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [
        CounterComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        SharedModule
    ]
})
export class MiniFeaturesModule { }
