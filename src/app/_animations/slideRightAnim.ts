import { trigger, state, animate, transition, style } from '@angular/animations';
export const slideRightAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideRightAnimation', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.4s ease-in')
    ]),
    transition(':leave', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ]);
