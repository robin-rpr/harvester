import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * Transition Animation for Overlay Components
 */
export const transitionAnimation = trigger('stateTransition', [
    transition(':enter', [
        style({opacity: '1'}),
        animate(800)
    ]),
    transition(':leave', [
        animate(400, style({opacity: '0'}))
    ]),
    state('*', style({backgroundColor: '#242424', opacity: '1'})),
]);
