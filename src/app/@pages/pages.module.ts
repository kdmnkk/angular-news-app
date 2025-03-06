import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from '@pages/pages.component';
import { NewsCardComponent } from '@pages/components/news-card/news-card.component';
import { NewsListComponent } from '@pages/components/news-list/news-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '@shared/layout/header/header.component';

const SHARED_COMPONENTS = [
  HeaderComponent,
];

@NgModule({
  declarations: [
    PagesComponent,
    NewsCardComponent,
    NewsListComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    NgbModule,
    NgbPaginationModule,
    ...SHARED_COMPONENTS,
  ]
})
export class PagesModule { }
