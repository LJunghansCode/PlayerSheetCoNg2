import { trigger, state, animate, transition, style } from '@angular/animations';
  export const slideTopAnimation =
    trigger('slideTopAnimation', [
       state('in', style({opacity: 1, transform: 'translateY(0)'})),
           transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      animate('0.4s ease-in')
    ]),
    transition(':leave', [
      animate(100, style({transform: 'translateY(-100%)'}))
    ])
]);
  export const slideTopAnimationRev =
    trigger('slideTopAnimationRev', [
       state('in', style({opacity: 1, transform: 'translateY(0)'})),
      transition(':enter', [
      style({
        transform: 'translateY(-100%)'
      }),
      animate('.3s ease-in')
    ]),
    transition(':leave', [
      animate('.3s ease-out', style({transform: 'translateY(-100%)'}))
    ])
]);

