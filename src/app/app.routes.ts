import { Routes } from '@angular/router';
import { Index } from './componentes/index';
import { General } from './componentes/general/general';
import { Transactions } from './componentes/transactions/transactions';
import { Basic } from './componentes/general/componentes/basic/basic';
import { Contact } from './componentes/general/componentes/contact/contact';
import { Address } from './componentes/general/componentes/address/address';

export const routes: Routes = [
  {
    path: 'index',
    component: Index,
  },
  {
    path: 'general',
    component: General,
    children: [
      { path: 'basic', component: Basic },
      { path: 'contact', component: Contact },
      { path: 'address', component: Address }
    ]
  },
  {
    path: 'transactions',
    component: Transactions,
  },
];
