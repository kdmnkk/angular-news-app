import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environment';
import { Observable } from 'rxjs';
import { NewsResponseInterface } from '@core/interfaces/news-response.interface';
import { QueryInterface } from '@core/interfaces/query.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private http = inject(HttpClient);

  public getNews(query: QueryInterface): Observable<NewsResponseInterface> | undefined {
    const params = { ...query }

    return this.http.get<NewsResponseInterface>(
      `${environment.newsApiUrl}/top-headlines`,
      { params: new HttpParams({ fromObject: params }) },
    );
  }
}
