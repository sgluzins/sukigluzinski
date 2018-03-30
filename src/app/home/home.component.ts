import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  styles = `Most of my work is representational, in a style recognizable as my own 
  with stark color, value contrasts, and bold elements 
  that often seem to slide into abstraction.`;

  themes = `My themes are as varied as my approach to most subjects, 
  which range from snowy landscapes to barnyard chickens.`;

  title = `specializing in watercolor, oil, & acrylic`

  cards = [
    {rows: 1, id: "title", content: this.title, img: ""},
    {rows: 1, id: "barnyard chickens", content:"", img: "/assets/IMG_0009.jpg"},
    {rows: 1, id: "themes", content: this.themes, img: ""},
    {rows: 1, id: "snowy landscape", content:"", img: "/assets/IMG_0007.jpg"},
    {rows: 2, id: "sunflower", content:"", img: "/assets/IMG_0059.jpg"},
    {rows: 1, id: "styles", content: this.styles, img: ""}
  ]
  constructor() { }

  ngOnInit() {
  }

}
