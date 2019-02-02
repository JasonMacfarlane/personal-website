import { Directive, ElementRef, HostListener, Input, OnInit, Renderer } from '@angular/core';

import { SocialShareService } from '../../_services/social-share/social-share.service';

@Directive({
  selector: '[appSocialShare]'
})
export class SocialShareDirective implements OnInit {
  @Input() appSocialShare: Array<string>

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
    private socialShareService: SocialShareService
  ) { }

  ngOnInit() {
    this.setAttributeTitle();
  }

  @HostListener('click') onClick() {
    this.socialShareService.share(
      this.appSocialShare[0] ? this.appSocialShare[0] : '',
      this.appSocialShare[1] ? this.appSocialShare[1] : '',
      this.appSocialShare[2] ? this.appSocialShare[2] : '',
    );
  }

  private setAttributeTitle() {
    let title = 'Share via ';

    switch (this.appSocialShare[0]) {
      case 'facebook':
        title += 'Facebook';
        break;
      case 'twitter':
        title += 'Twitter';
        break;
      case 'email':
        title += 'email';
        break;
      default:
        title = '';
        break;
    }

    this.renderer.setElementAttribute(this.elementRef.nativeElement, 'title', title);
  }
}
