import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'platform',
    pathMatch: 'full',
  },
  {
    path: 'platform',
    loadComponent: () => import('./platform/platform.component'),
  },
];
