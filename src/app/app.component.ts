import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<router-outlet/>',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'News Portal';
}
