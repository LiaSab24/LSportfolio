import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { AboutMe } from './about-me/about-me';
import { ContactMe } from './contact-me/contact-me';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, ContactMe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
