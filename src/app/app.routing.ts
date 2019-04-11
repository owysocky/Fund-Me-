import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IdeasListComponent } from './ideas-list/ideas-list.component'

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'list',
    component: IdeasListComponent
  },
  {
    path: 'animals',
    component: IdeasListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);