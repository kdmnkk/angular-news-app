import { Injectable, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ApiKeyErrorModalComponent } from '@shared/modals/api-key-error-modal/api-key-error-modal.component';
import { ArticleInterface } from '@core/interfaces/article.interface';
import { ArticleModalComponent } from '@shared/modals/article-modal/article-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalService = inject(NgbModal);

	public openApiKeyErrorModal(): NgbModalRef {
		return this.modalService.open(ApiKeyErrorModalComponent, { centered: true });
	}

	public openArticleModal(article: ArticleInterface): NgbModalRef {
    const modalRef = this.modalService.open(ArticleModalComponent, {
      centered: true,
      fullscreen: true,
      scrollable: true,
    })

    modalRef.componentInstance.article = article;

    return modalRef;
	}
}
