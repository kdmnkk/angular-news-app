import { Injectable, inject } from '@angular/core';
import { NewsApiService } from '@core/api/news.api.service';
import { NewsResponseInterface } from '@core/interfaces/news-response.interface';
import { QueryInterface } from '@core/interfaces/query.interface';
import { ToastService } from '@core/services/toast.service';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

export const PER_PAGE = 21;
@Injectable({
  providedIn: 'root'
})
export class NewsDataService {
  private api = inject(NewsApiService);
  private toastService = inject(ToastService);

  private readonly _query$ = new BehaviorSubject<QueryInterface>({ page: 1,  pageSize: PER_PAGE });
  private readonly _news$ = new BehaviorSubject<NewsResponseInterface | null>(null);

  constructor() {
     this._query$.subscribe((query) => this.getNews());
  }

  public get news$(): Observable<NewsResponseInterface | null> {
    return this._news$.asObservable();
  }

  public get currentPage$(): Observable<number> {
    return this._query$.pipe(map((query) => query.page || 1));
  }

  public getNews(): void {
    this.api.getNews(this._query$.value)?.pipe(
      catchError((err) => {
        this.toastService.show({ header: 'Error ' + err.status, message: 'Failed to load news. ' + err.error.message });
        return of(null)
      }),
    )
    .subscribe((news) => {
      this._news$.next(news);
    });
  }

  public setPage(page: number) {
    this._query$.next({ ...this._query$.value, page });
  }

  public setQuery(query: QueryInterface) {
    this._query$.next({ ...query, page: 1 });
  }

  public resetQuery() {
    this._query$.next({ page: 1, pageSize: PER_PAGE });
  }
}
