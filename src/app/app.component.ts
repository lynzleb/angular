import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor(private router: Router) {}

    title = 'angular';

    onClickCounter() {
        console.log('hello');
        this.router.navigateByUrl('counter');
    }
}
