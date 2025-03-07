import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'esp-not-found',
	templateUrl: './not-found.component.html',
	standalone: true,
	styleUrls: ['./not-found.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class NotFoundComponent {}
