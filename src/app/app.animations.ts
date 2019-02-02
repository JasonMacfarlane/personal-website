import { trigger, style, animate, state, transition, query, group, animateChild } from '@angular/animations';

const routeAnimation = [
  query(':enter', [
    style({ opacity: 0 }),
    animate('600ms', style({ opacity: 1, zIndex: '1' })),
  ], { optional: true }),
  query(':leave', [
    style({ position: 'absolute', opacity: 0, zIndex: '-1' }),
  ], { optional: true }),

  query('#section-header h1', [
    style({ transform: 'translateY(100px)', opacity: 0 }),
  ], { optional: true }),
  query('#section-header h1', [
    animate('1000ms 300ms ease', style({ transform: 'translateY(0)', opacity: 1 })),
  ], { optional: true }),

  query('#section-header h2', [
    style({ transform: 'translateY(100px)', opacity: 0 }),
  ], { optional: true }),
  query('#section-header h2', [
    animate('1000ms 380ms ease', style({ transform: 'translateY(0)', opacity: 1 })),
  ], { optional: true }),

  query('#section-header .section__header__btn', [
    style({ transform: 'translateY(100px)', opacity: 0 }),
  ], { optional: true }),
  query('#section-header .section__header__btn', [
    animate('1000ms 460ms ease', style({ transform: 'translateY(0)', opacity: 1 })),
  ], { optional: true }),

  query('#subnav', [
    style({ top: '-100px' }),
  ], { optional: true }),
  query('#subnav', [
    animate('1000ms 540ms ease', style({ top: '20px' })),
  ], { optional: true }),

  query('#scroll-arrow', [
    style({ opacity: 0 }),
  ], { optional: true }),
  query('#scroll-arrow', [
    animate('1000ms 800ms ease', style({ opacity: 1 })),
  ], { optional: true }),
];

export const routeTransition =
  trigger('routeAnimations', [
    transition('* => *', [group(routeAnimation)]),
  ]);

export const modalIn = [
  trigger('openClose', [
    state('open', style({
      bottom: '0',
    })),
    state('closed', style({
      bottom: '-100%',
    })),
    transition('* => closed', [
      animate('0.5s ease'),
    ]),
    transition('* => open', [
      animate('0.5s ease'),
    ]),
  ]),
];

export const modalOut = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    }),
  ]),
  query(':leave', [
    style({ top: '0', zIndex: '2' }),
  ]),
  query(':enter', [
    style({ opacity: '0' }),
  ]),
  group([
    query(':leave', [
      animate('600ms ease', style({ top: '100%' })),
    ]),
    query(':enter', [
      animate('600ms ease', style({ opacity: '1' })),
    ]),
  ]),
];
