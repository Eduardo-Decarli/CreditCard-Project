import { Routes } from '@angular/router';
import { Index } from './componentes/index';
import { General } from './componentes/general/general';

export const routes: Routes = [
  {
    path: '',
    component: Index
  },
  {
    path: 'general',
    component: General
  }
];
