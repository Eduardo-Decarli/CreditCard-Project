import { Routes } from '@angular/router';
import { Index } from './componentes/index';
import { General } from './componentes/general/general';
import { Transactions } from './componentes/transactions/transactions';
import { Basic } from './componentes/general/componentes/basic/basic';
import { Contact } from './componentes/general/componentes/contact/contact';
import { Address } from './componentes/general/componentes/address/address';
import { PageNotFound } from './componentes/page-not-found/page-not-found';
import { Credit } from './componentes/transactions/componentes/credit/credit';
import { Debit } from './componentes/transactions/componentes/debit/debit';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
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
    children: [
      { path: 'credit', component: Credit },
      { path: 'debit', component: Debit }
    ]
  },
  {
    path: '**',
    component: PageNotFound
  }
];
