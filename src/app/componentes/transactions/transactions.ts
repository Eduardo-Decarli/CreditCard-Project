import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-transactions',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {

}
