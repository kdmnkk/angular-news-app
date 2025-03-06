import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environment';
import { ModalService } from '@core/services/modal.service';
import { Observable } from 'rxjs';
import { NewsResponseInterface } from '@core/interfaces/news-response.interface';
import { QueryInterface } from '@core/interfaces/query.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private http = inject(HttpClient);
  private modalService = inject(ModalService);

  public getNews(query: QueryInterface): Observable<NewsResponseInterface> | undefined {
    if (!environment.NewsApiKey) {
      this.modalService.openApiKeyErrorModal();
      return;
    }

    const params = {
      ...query,
      apiKey: environment.NewsApiKey,
      language: 'en',
      pageSize: 21
    }

    return this.http.get<NewsResponseInterface>(
      `${environment.NewsApiUrl}/top-headlines`,
      { params: new HttpParams({ fromObject: params as never }) },
    );
  }
}
