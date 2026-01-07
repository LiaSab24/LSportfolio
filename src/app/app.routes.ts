import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'imprint', loadComponent: () => import('./imprint/imprint').then(m => m.Imprint) },
];
