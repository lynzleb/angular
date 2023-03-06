import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from '../shared/shared.module';
import { MiniFeaturesModule } from '../features/mini-features/mini-features.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        MiniFeaturesModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
