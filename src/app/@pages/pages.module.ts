import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from '@pages/pages.component';
import { NewsCardComponent } from '@pages/news-list/news-card/news-card.component';
import { NewsListComponent } from '@pages/news-list/news-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '@shared/layout/header/header.component';
import { NewsFilterComponent } from "../@shared/news-filter/news-filter.component";
import { ToastComponent } from "../@shared/toast/toast.component";
import { PlugComponent } from "../@shared/plug/plug.component";

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
    NewsFilterComponent,
    ToastComponent,
    PlugComponent
]
})
export class PagesModule { }
