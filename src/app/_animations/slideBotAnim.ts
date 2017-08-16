import { trigger, state, animate, transition, style, query, animateChild } from '@angular/animations';
export const slideLeftAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideLeftAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('0.5s ease-in')
      ]),
      transition(':leave', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
  ]);

