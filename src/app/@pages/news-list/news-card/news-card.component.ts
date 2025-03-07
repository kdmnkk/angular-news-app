import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { ArticleInterface } from '@core/interfaces/article.interface';
import { ModalService } from '@core/services/modal.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCardComponent {
  private modalService = inject(ModalService);

  public article = input.required<ArticleInterface>();

  public openArticle(): void {
    this.modalService.openArticleModal(this.article());
  }
}
