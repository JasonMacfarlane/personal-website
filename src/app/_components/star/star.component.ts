import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
})
export class StarComponent implements OnInit {
  @Input() level: number;

  levelArr: Array<any>;

  constructor() { }

  ngOnInit() {
    this.levelArr = new Array<any>(this.level);
  }

}
