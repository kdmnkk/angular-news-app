import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<router-outlet/>',
    styleUrls: ['./app.component.scss'],
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
