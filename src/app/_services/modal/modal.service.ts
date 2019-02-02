import { Injectable } from '@angular/core';

import { ModalComponent } from '../../_components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  open(elm: ModalComponent) {
    elm.open();
  }

  close(elm: ModalComponent) {
    elm.close();
  }
}
