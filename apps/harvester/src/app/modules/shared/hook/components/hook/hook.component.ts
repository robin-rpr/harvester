import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {colorEnums} from '../../../../../enums/color.enums';

@Component({
    selector: 'app-hook',
    templateUrl: './hook.component.html',
    styleUrls: ['./hook.component.scss']
})
/**
 * Shared Hook Component
 *
 * @param {String} value Button Text value
 * @param {String} icon Icon CSS Class
 * @param {colorEnums} type Color Enum
 * @param {Boolean} disabled Option to disable Button
 * @param {EventEmitter} action Emits click events
 *
 * @example
 * // example.module.ts
 *  import {HookModule} from '../../shared/navigator/navigator.module';
 *  //...
 *  @NgModule({
 *      declarations: [ExampleComponent],
 *      imports: [
 *          CommonModule,
 *          HookModule
 *      ]
 *  })
 *
 * // example.component.ts
 * import {colorEnums} from "../../../../../enums/color.enums";
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
export class HookComponent implements OnChanges {

    @Input() value: string;
    @Input() tooltip?: string;
    @Input() icon: string;
    @Input() color: colorEnums;
    @Input() disabled: boolean;
    @Input() loading: boolean;
    @Output() action = new EventEmitter();

    public classes: unknown;

    constructor() {
    }

    /**
     * Get CSS Classes for Button
     */
    get getClasses() {
        const classes = {
            'hook__wrapper--disabled': this.disabled,
            'hook__wrapper--display-icon': this.icon,
            'hook__wrapper--display-value': this.value,
            'hook__wrapper--display-stripes': this.loading,
            'hook__wrapper--display-tooltip': this.tooltip
        };
        switch (this.color) {
            case colorEnums.PRIMARY:
                classes['hook__wrapper--primary'] = true;
                break;
            case colorEnums.SECONDARY:
                classes['hook__wrapper--secondary'] = true;
                break;
            case colorEnums.TERTIARY:
                classes['hook__wrapper--tertiary'] = true;
                break;
            case colorEnums.QUATERNARY:
                classes['hook__wrapper--quaternary'] = true;
                break;
            case colorEnums.QUINARY:
                classes['hook__wrapper--quinary'] = true;
                break;
            case colorEnums.SENARY:
                classes['hook__wrapper--senary'] = true;
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
