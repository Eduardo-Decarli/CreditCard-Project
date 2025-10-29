import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-general',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './general.html',
  styleUrl: './general.scss',
})
export class General {

}
