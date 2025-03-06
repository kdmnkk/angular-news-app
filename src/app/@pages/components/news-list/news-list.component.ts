import { Component, inject } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { NewsDataService } from '@core/data-services/news-data.service';
import { map, filter } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent {
    private dataService = inject(NewsDataService);

    public page$ = this.dataService.currentPage$;
    public news$ = this.dataService.news$;
    public pagesCount$ = this.news$.pipe(
      filter(Boolean),
      map((news) => Math.ceil(news.totalResults / 20) * 10)
    );

    public pageChange(page: any): void {
      this.dataService.setPage(page);

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

    public search(event: Event): void {
      const element = event.currentTarget as HTMLInputElement;
      this.dataService.setSearch(element.value);
    }
  }
