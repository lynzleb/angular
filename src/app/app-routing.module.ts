import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from '../features/mini-features/counter/counter.component';
import { ToggleComponent } from 'src/features/mini-features/toggle/toggle.component';

const routes: Routes = [
    { path: 'counter', component: CounterComponent },
    { path: 'toggle', component: ToggleComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
