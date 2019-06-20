import { sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild } from '@angular/animations';

const query = (s, a, o = { optional: true }) => q(s, a, o);

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),
    sequence([
      query(':leave', animateChild()),
      group([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('500ms cubic-bezier(0.86, 0, 0.07, 1)',
            style({ transform: 'translateX(-100%)' }))
        ]),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('500ms cubic-bezier(0.86, 0, 0.07, 1)',
            style({ transform: 'translateX(0%)' })),
        ]),
      ]),
      query(':enter', animateChild()),
    ])
  ])
]);

export const homeTransition = trigger('homeTransition', [
  transition(':enter', [
    query('.block', style({ opacity: 0 })),
    query('.block', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('1s cubic-bezier(0.86, 0, 0.07, 1)', style({ transform: 'translateY(0px)', opacity: 1 })),
    ])),
  ]),
  transition(':leave', [
    query('.block', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(0.86, 0, 0.07, 1)', style({ transform: 'translateY(100px)', opacity: 0 })),
    ])),
  ])
]);
