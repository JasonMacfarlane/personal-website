import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Router, RouterOutlet, RoutesRecognized } from '@angular/router';

import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { routeTransition } from './app.animations';

import { ScrollService } from './_services/scroll/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routeTransition],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('scroll') scrollRef: ElementRef;

  rootClass = 'root';
  bgClass = 'bg';
  showFooter = true;

  constructor(
    private _angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private _router: Router,
    public scrollService: ScrollService) {
    this._angulartics2GoogleAnalytics.startTracking();
  }

  onScroll($event) {
    this.scrollService.setBackgroundOpacity($event.target.scrollTop);
  }

  ngAfterViewInit() {
    this._router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.rootClass = `root root--${data.state.root.firstChild.data.class}`;
        this.bgClass = `bg bg--${data.state.root.firstChild.data.class}`;
        this.showFooter = data.url !== '/';
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onActivate(event) {
    this.scrollRef.nativeElement.scrollTop = 0;
  }
}
