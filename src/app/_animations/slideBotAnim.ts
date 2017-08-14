import { trigger, state, animate, transition, style } from '@angular/animations';
export const slideBotAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('flyInOut', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      }),
      animate('0.4s ease-in')
    ]),
    transition('* => void', [
      animate('0.3s 0.1s ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ])
  ]);
