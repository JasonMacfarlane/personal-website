import { Directive, HostListener, Input } from '@angular/core';

import { GaService } from '../../_services/ga/ga.service';

@Directive({
  selector: '[appGa]'
})
export class GaDirective {
  @Input() appGa: Array<string>

  constructor(private gaService: GaService) { }

  @HostListener('click') onClick() {
    this.gaService.track(this.appGa[0], this.appGa[1], this.appGa[2]);
  }
}
