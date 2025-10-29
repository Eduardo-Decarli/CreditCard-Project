import { Routes } from '@angular/router';
import { Index } from './componentes/index';
import { General } from './componentes/general/general';
import { Transactions } from './componentes/transactions/transactions';

export const routes: Routes = [
  {
    path: '',
    component: Index,
  },
  {
    path: 'general',
    component: General,
  },
  {
    path: 'transactions',
    component: Transactions,
  },
];
