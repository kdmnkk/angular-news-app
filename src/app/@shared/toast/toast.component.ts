import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbToast } from "@ng-bootstrap/ng-bootstrap";
import { ToastInterface, ToastService } from "@core/services/toast.service";
import { AsyncPipe, CommonModule, NgForOf } from "@angular/common";


@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    NgbToast,
    AsyncPipe,
    CommonModule,
  ],
  templateUrl: './toast.component.html',
  host: { class: 'toast-container position-fixed bottom-60 center-horisontal', style: 'z-index: 1200' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}

  public close(toast: ToastInterface) {
    this.toastService.remove(toast);
  }
}
