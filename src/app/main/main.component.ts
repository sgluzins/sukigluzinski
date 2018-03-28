import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  imgs = [
    {rows: 2, id: "IMG_0004", title:"roses are red", size: "30x30", price: "$400"},
    {rows: 1, id: "IMG_0005", title:"pink purple", size: "30x30", price: "$600"},
    {rows: 1, id: "IMG_0006", title:"yellow floral", size: "35x30", price: "$500"},
    {rows: 1, id: "IMG_0007", title:"snow snow snow", size: "30x35", price: "$250"},
    {rows: 1, id: "IMG_0008", title:"peaceful creek", size: "30x30", price: "$300"},
  ]
  @ViewChild('sidenav') sidenav: MatSidenav;
  currentImg = {};

  showArt(img) {
    this.currentImg = img;
    this.sidenav.open();
  }

  ngOnInit() {
  }

}