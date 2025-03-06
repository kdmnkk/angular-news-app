import { Injectable, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ApiKeyErrorModalComponent } from '@shared/modals/api-key-error-modal/api-key-error-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalService = inject(NgbModal);

	public openApiKeyErrorModal(): NgbModalRef {
		return this.modalService.open(ApiKeyErrorModalComponent);
	}
}
