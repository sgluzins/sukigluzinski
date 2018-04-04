import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  styles = `Most of my work is representational, in a style recognizable as my own with stark color, value contrasts, and bold elements 
  that often seem to slide into abstraction.`;

  themes = `My themes are as varied as my approach to most subjects, 
  which range from snowy landscapes to barnyard chickens.`;

  title = `specializing in watercolor, oil, & acrylic`

  constructor() { }

  ngOnInit() {
  }

}
