import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialShareService {

  constructor() { }

  share(network, url, text) {
    switch (network) {
      case 'twitter':
        window.open('https://twitter.com/home?status=' + text + '%20' + url, '_blank');
        break;

      case 'facebook':
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
        break;

      case 'email':
        location.href = 'mailto:?&subject=You might find this useful :)&body=Hey,%0A%0AI%20thought%20you’d%20like%20this%20website.%0A%0A' + text + '%0A%0A' + url;
        break;

      default:
        return;
    }
  }
}
