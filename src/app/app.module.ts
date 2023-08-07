import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from '../shared/shared.module';
import { MiniFeaturesModule } from '../features/mini-features/mini-features.module';
import { NgxsModule } from '@ngxs/store';

import { CounterState } from 'src/store/counter.state';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxsModule.forRoot([CounterState]), SharedModule, MiniFeaturesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
