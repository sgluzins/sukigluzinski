import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  imgs = [
    {rows: 2, title: "IMG_0004", size: "30x30", price: "$400"},
    {rows: 1, title: "IMG_0005", size: "30x30", price: "$600"},
    {rows: 1, title: "IMG_0006", size: "35x30", price: "$500"},
    {rows: 1, title: "IMG_0007", size: "30x35", price: "$250"},
    {rows: 1, title: "IMG_0008", size: "30x30", price: "$300"},
  ]
  @Output() navToggle = new EventEmitter<boolean>();
  currentImg = {};

  showArt(img) {
    this.currentImg = img;
    this.navToggle.emit(true);
  }

  ngOnInit() {
  }

}
