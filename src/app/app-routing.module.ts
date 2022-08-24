import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'uitoux', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'uitoux',
    loadChildren: () =>
      import('./uitoux/uitoux.module').then((m) => m.UitouxModule),
  },
  // * redirect
  { path: '**', redirectTo: 'uitoux', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
