import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatSlideToggleModule
    ]
})
export class SharedModule { }
