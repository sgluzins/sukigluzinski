import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  colNum: Observable<number>;
  rowHeight;
  width;
  height;

  imgs = [
    {rows: 2, id: "IMG_0038", category:"flowers & still life"},
    {rows: 2, id: "IMG_0012", category:"landscape"},
    {rows: 2, id: "IMG_0059", category:"sunflower"},
    {rows: 2, id: "IMG_0071", category:"figure"},
    {rows: 2, id: "IMG_0089", category:"contemporary"},
  ]
  constructor(private media: ObservableMedia) { }

  ngOnInit() {
    const grid = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 5],
      ['lg', 5],
      ['xl', 5]
    ])
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if(this.media.isActive(mqAlias)){
        start = cols;
      }
    });
    this.colNum = this.media.asObservable().map(change => {
      console.log(change);
      console.log(grid.get(change.mqAlias));
      if(grid.get(change.mqAlias) == 1){
        this.rowHeight = 50;
        this.width = 100;
        this.height = 0;
      } else {
        this.rowHeight = 300;
        this.width = 0;
        this.height = 100;
      }
      return grid.get(change.mqAlias);
    }).startWith(start);
  }

}
