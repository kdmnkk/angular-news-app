import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
