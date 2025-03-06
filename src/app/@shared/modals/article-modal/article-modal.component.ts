import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ArticleInterface } from '@core/interfaces/article.interface';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-article-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-modal.component.html',
  styleUrl: './article-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleModalComponent {
  @Input({required: true}) article!: ArticleInterface;

  constructor(private activeModal: NgbActiveModal) {}

  dismiss<T = unknown>(data?: T): void {
    this.activeModal.dismiss(data);
  }

  close<T = unknown>(data?: T): void {
    this.activeModal.close(data);
  }
}
