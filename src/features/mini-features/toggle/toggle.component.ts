import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
    constructor(private http: HttpClient) { }

    strVal$ = this.getString();

    onToggleChange(change: MatSlideToggleChange): void {
        if (change.checked) {

        }
    }

    private getString(): Observable<any> {
        return this.http.get('http://localhost:8080/getString', { responseType: 'text' }).pipe(
            map((strVal) => {
                return strVal;
            })
        )
    }
}
