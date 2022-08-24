import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { UitouxComponent } from './uitoux.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'page',
        component: UitouxComponent
      },
      { path: '', redirectTo: 'page', pathMatch: 'full' },
      { path: '**', redirectTo: 'page', pathMatch: 'full' },
    ]
  },
  // * redirect
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  { path: '**', redirectTo: 'page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UitouxRoutingModule { }
