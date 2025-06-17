// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [  // <--- EXPORT aquí es clave
  {
    path: '',
    component: HomeComponent
  }
];
