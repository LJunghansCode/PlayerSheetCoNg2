import { trigger, state, animate, transition, style } from '@angular/animations';
export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [
        // route 'enter' transition
        transition(':enter', [
            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen,
                // -400% is required instead of -100% because the negative position adds to the width of the element
                marginRight: '-400%',
            }),
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
             marginRight: 0,
            }))
        ]),
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                marginRight: '-400%'
            }))
        ])
    ]);
