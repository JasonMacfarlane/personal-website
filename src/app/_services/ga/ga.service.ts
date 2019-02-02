import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

@Injectable()
export class GaService {

  constructor(private angulartics2: Angulartics2) { }

  track(action, category, label) {
    this.angulartics2.eventTrack.next({
      action: action,
      properties: {
        category: category,
        label: label,
      },
    });
  }
}
