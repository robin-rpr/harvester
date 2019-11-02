import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {colorEnums} from '../../enums/color.enums';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
/**
 * Shared Button Component
 *
 * @param {String} value Button Text value
 * @param {String} icon Icon CSS Class
 * @param {colorEnums} type Color Enum
 * @param {Boolean} disabled Option to disable Button
 * @param {EventEmitter} action Emits click events
 *
 * @example
 * // example.module.ts
 *  import {ButtonModule} from '../../shared/button/button.module';
 *  //...
 *  @NgModule({
 *      declarations: [ExampleComponent],
 *      imports: [
 *          CommonModule,
 *          ButtonModule
 *      ]
 *  })
 *
 * // example.component.ts
 *  import {colorEnums} from '../../shared/button/enums/color.enums';
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
 *  <app-button [value]="'Click me!'" [type]="colorEnums.SECONDARY" [icon]="'icon-heart-filled'"
 *      (action)="sayHello()"></app-button>
 */
export class ButtonComponent implements OnChanges {

    @Input() value: string;
    @Input() description?: string;
    @Input() icon: string;
    @Input() type: colorEnums;
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
            'button__wrapper--disabled': this.disabled,
            'button__wrapper--align-text-left': this.icon,
            'button__wrapper--display-value': this.value,
            'button__wrapper--display-stripes': this.loading,
            'button__wrapper--display-description': this.description
        };
        switch (this.type) {
            case colorEnums.PRIMARY:
                classes['button__wrapper--primary'] = true;
                break;
            case colorEnums.SECONDARY:
                classes['button__wrapper--secondary'] = true;
                break;
            case colorEnums.TERTIARY:
                classes['button__wrapper--tertiary'] = true;
                break;
            case colorEnums.QUATERNARY:
                classes['button__wrapper--quaternary'] = true;
                break;
            case colorEnums.QUINARY:
                classes['button__wrapper--quinary'] = true;
                break;
            case colorEnums.SENARY:
                classes['button__wrapper--senary'] = true;
                break;
            default:
                throw new Error(`ButtonComponent doesn't support type ${this.type}`);
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
