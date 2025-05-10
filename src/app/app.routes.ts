import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TesteComponent } from './pages/teste/teste.component';

export const routes: Routes = [
  {
    path: '',
    component: TesteComponent,
    title: 'SousaDev'
  }
];
