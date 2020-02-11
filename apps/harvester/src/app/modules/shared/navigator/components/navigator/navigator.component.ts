import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {colorEnums} from '../../../../../enums/color.enums';

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.scss']
})
/**
 * Shared Navigator Component
 *
 * @param {String} value Button Text value
 * @param {String} icon Icon CSS Class
 * @param {colorEnums} type Color Enum
 * @param {Boolean} disabled Option to disable Button
 * @param {EventEmitter} action Emits click events
 *
 * @example
 * // example.module.ts
 *  import {NavigatorModule} from '../../shared/navigator/navigator.module';
 *  //...
 *  @NgModule({
 *      declarations: [ExampleComponent],
 *      imports: [
 *          CommonModule,
 *          NavigatorModule
 *      ]
 *  })
 *
 * // example.component.ts
 *  import {colorEnums} from "../../../../../enums/color.enums";
 *  // ...
 *  export class ExampleComponent {
 *      colorEnums = colorEnums;
 *      // ...
 *      sayHello() {
 *          alert('Hello!');
 *      }
 *  }
 *
 * // example.component.html
 *  <app-hook [value]="'Click me!'" [color]="colorEnums.SECONDARY" [icon]="'icon-heart-filled'"
 *      (action)="sayHello()"></app-hook>
 */
export class NavigatorComponent implements OnChanges {

    @Input() value: string;
    @Input() icon: string;
    @Input() color: colorEnums;
    @Input() disabled: boolean;
    @Input() loading: boolean;
    @Output() action: EventEmitter<Event> = new EventEmitter();

    public classes: unknown;

    constructor() {
    }

    /**
     * Get CSS Classes for Button
     */
    get getClasses() {
        const classes = {
            'navigator__wrapper--disabled': this.disabled,
            'navigator__wrapper--display-icon': this.icon,
            'navigator__wrapper--display-value': this.value,
            'navigator__wrapper--display-stripes': this.loading,
        };
        switch (this.color) {
            case colorEnums.PRIMARY:
                classes['navigator__wrapper--primary'] = true;
                break;
            case colorEnums.SECONDARY:
                classes['navigator__wrapper--secondary'] = true;
                break;
            case colorEnums.TERTIARY:
                classes['navigator__wrapper--tertiary'] = true;
                break;
            case colorEnums.QUATERNARY:
                classes['navigator__wrapper--quaternary'] = true;
                break;
            case colorEnums.QUINARY:
                classes['navigator__wrapper--quinary'] = true;
                break;
            case colorEnums.SENARY:
                classes['navigator__wrapper--senary'] = true;
                break;
            default:
                throw new Error(`HookComponent doesn't support color ${this.color}`);
        }

        return classes;
    }

    /**
     * Emits click Event to action Output
     * @param event Click Event
     */
    click(event) {
        this.action.emit(event);
    }

    ngOnChanges() {
        this.classes = this.getClasses;
    }

}
