import {animate, style, transition, trigger, state} from '@angular/animations';

/**
 * Transition Animation for Overlay Components
 */
export const transitionAnimation = trigger('stateTransition', [
    state('hidden', style({ opacity: 0, transform: 'scale(0.1)'})),
    state('visible', style({ opacity: 1, transform: 'scale(1)'})),
    transition('visible <=> hidden', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
]);

export const fadeAnimation = trigger('fadeTransition', [
    transition(':enter', [
        style({
            opacity: 0,
        }),
        animate(100)
    ]),
    transition(':leave', [
        animate(100, style({ opacity: 0 }))
    ]),
    state('*', style({ opacity: 1})),
]);
