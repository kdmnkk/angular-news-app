import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ArticleInterface } from '@core/interfaces/article.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCardComponent {
  public article = input.required<ArticleInterface>();
}
