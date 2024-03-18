import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'plataform',
    pathMatch: 'full',
  },
  {
    path: 'platform',
    loadComponent: () => import('./platform/platform.component'),
  },
];
