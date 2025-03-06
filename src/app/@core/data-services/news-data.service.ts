import { Injectable, inject } from '@angular/core';
import { NewsApiService } from '@core/api/news.api.service';
import { NewsResponseInterface } from '@core/interfaces/news-response.interface';
import { QueryInterface } from '@core/interfaces/query.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {
  private api = inject(NewsApiService);

  private readonly _query$ = new BehaviorSubject<QueryInterface>({page: 1});
  private readonly _news$ = new BehaviorSubject<NewsResponseInterface | null>(null);

  constructor() {
     this._query$.subscribe((query) => this.getNews());
  }

  public get news$(): Observable<NewsResponseInterface | null> {
    return this._news$.asObservable();
  }

  public getNews(): void {
    this.api.getNews(this._query$.value)?.subscribe((news) => {
      this._news$.next(news);
    });
  }

  public setSearch(q: string) {
    this._query$.next({ ...this._query$.value, q });
  }

  public setPage(page: number) {
    this._query$.next({ ...this._query$.value, page });
  }
}
