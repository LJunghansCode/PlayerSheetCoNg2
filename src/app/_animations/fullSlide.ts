import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideFullAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideFullAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen,
                // -400% is required instead of -100% because the negative position adds to the width of the element
                right: '-400%',

                // start with background opacity set to 0 (invisible)

            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                right: 0,

                // transition the background opacity to 0.8 to fade it in

            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                right: '-400%',

                // transition the background opacity to 0 to fade it out

            }))
        ])
    ]);
