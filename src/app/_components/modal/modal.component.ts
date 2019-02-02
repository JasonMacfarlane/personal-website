import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { modalIn } from '../../app.animations';

import { ModalService } from '../../_services/modal/modal.service';

@Component({
  // selector: 'app-modal',
  selector: 'app-modal',
  template: `
    <div class="modal" [@openClose]="isOpen ? 'open' : 'closed'">
      <div class="modal__close" (click)="close()">
        <fa-icon [icon]="['fas', 'times']"></fa-icon>
      </div>
      <div class="modal__inner">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss'],
  animations: [modalIn],
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  private _element: any;
  isOpen = false;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this._element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;

    // Move element to bottom of page (just before </body>) so it can be displayed above everything else.
    document.getElementById('root').appendChild(this._element);
  }

  // Remove self from modal service when directive is destroyed.
  ngOnDestroy(): void {
    this._element.remove();
  }

  // Open modal.
  open(): void {
    this.isOpen = true;
    document.body.classList.add('modal-open');
  }

  // Close modal.
  close(): void {
    this.isOpen = false;
    document.body.classList.remove('modal-open');
  }
}
