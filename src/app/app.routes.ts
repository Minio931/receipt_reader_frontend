import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { ROUTES_CONFIG } from './configs/routes.config';

export const ROUTES: Routes = [
  {
    path: ROUTES_CONFIG.Blank,
    component: AppLayoutComponent,
    pathMatch: 'full',
  },
  {
    path: ROUTES_CONFIG.Wildcard,
    redirectTo: ROUTES_CONFIG.Blank,
    pathMatch: 'full',
  },
];
