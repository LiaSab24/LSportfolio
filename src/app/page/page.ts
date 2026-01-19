import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { AboutMe } from './about-me/about-me';
import { ContactMe } from './contact-me/contact-me';

@Component({
  selector: 'app-page',
  imports: [Hero, AboutMe, ContactMe],
  templateUrl: './page.html',
  styleUrl: './page.scss',
})
export class Page {

}
