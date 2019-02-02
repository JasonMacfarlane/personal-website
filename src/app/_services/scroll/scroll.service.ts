import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private readonly _maxBackgroundOpacity = 0.1;
  private readonly _maxScrollBeforeBackgroundHides = 300;
  private _backgroundOpacity = this._maxBackgroundOpacity;

  constructor(private _scrollToService: ScrollToService) { }

  scrollTo(target) {
    const config: ScrollToConfigOptions = {
      target: target,
      duration: 600,
      easing: 'easeInOutQuad',
    };

    this._scrollToService.scrollTo(config);
  }

  setBackgroundOpacity(scrollPositionY: number) {
    let opacity = ((this._maxScrollBeforeBackgroundHides - scrollPositionY) / this._maxScrollBeforeBackgroundHides) * this._maxBackgroundOpacity;

    if (opacity < 0) {
      opacity = 0;
    }

    this._backgroundOpacity = opacity;
  }

  getBackgroundOpacity() {
    return this._backgroundOpacity;
  }
}
