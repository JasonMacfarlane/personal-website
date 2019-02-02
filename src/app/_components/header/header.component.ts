import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  showNav = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }

  collapseNav() {
    this.showNav = false;
  }

}
