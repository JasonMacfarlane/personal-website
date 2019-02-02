import { Component, OnInit } from '@angular/core';

import { ModalService } from '../_services/modal/modal.service';
import { ScrollService } from '../_services/scroll/scroll.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  host: { 'class': 'route' },
})
export class DeveloperComponent implements OnInit {
  constructor(public modalService: ModalService, public scrollService: ScrollService) { }

  ngOnInit() { }
}
