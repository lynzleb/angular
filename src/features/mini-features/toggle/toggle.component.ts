import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { RxState } from '@rx-angular/state';
import { RxActionFactory } from '@rx-angular/state/actions';
import { ToggleState, ToggleActions } from './toggle.state';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    providers: [RxState, RxActionFactory],
})
export class ToggleComponent {
    constructor(
        private http: HttpClient,
        private state: RxState<ToggleState>,
        private actionFactory: RxActionFactory<ToggleActions>,
    ) {
        this.initLocalState();
        this.initEffects();
    }

    actions = this.actionFactory.create();

    strVal$ = this.actions.switch$.pipe(map((val) => (val ? this.state.get('display') : '')));

    private initLocalState(): void {
        this.state.connect('display', this.getString());
    }

    private initEffects(): void {}

    private getString(): Observable<any> {
        return this.http.get('http://localhost:8080/getString', { responseType: 'text' }).pipe(
            map((strVal) => {
                return strVal;
            }),
        );
    }
}
