import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from '@pages/pages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '@shared/layout/header/header.component';

const SHARED_COMPONENTS = [
  HeaderComponent,
];

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    NgbModule,
    ...SHARED_COMPONENTS,
  ]
})
export class PagesModule { }
