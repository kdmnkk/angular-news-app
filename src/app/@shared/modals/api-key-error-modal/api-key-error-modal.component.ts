import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-api-key-error-modal',
  standalone: true,
  imports: [],
  templateUrl: './api-key-error-modal.component.html',
  styleUrl: './api-key-error-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiKeyErrorModalComponent {
  constructor(private activeModal: NgbActiveModal) {}

  dismiss<T = unknown>(data?: T): void {
    this.activeModal.dismiss(data);
  }

  close<T = unknown>(data?: T): void {
    this.activeModal.close(data);
  }
}
