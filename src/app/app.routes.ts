import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [

  // {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: Home },
 { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'locations', loadComponent: () => import('./pages/locations/locations').then(m => m.Locations) },
  { path: 'stories', loadComponent: () => import('./pages/stories/stories').then(m => m.Stories) },
  // { path: 'cooking', loadComponent: () => import('./pages/cooking/cooking.component').then(m => m.CookingComponent) },
  { path: 'news', loadComponent: () => import('./pages/news/news').then(m => m.News) },
  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login) },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  {path: 'contact',  loadComponent: () =>import('./pages/contact/contact').then(m => m.Contact)}
];
