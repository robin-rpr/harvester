import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
/**
 * Shared Input Component
 *
 * @param {String} placeholder Input Placeholder
 * @param {String} icon CSS Icon Class
 * @param {('text'|'password'|'email')} type Input type
 * @param {FormGroup} FormGroup Object
 * @param {String} name Unique Input name
 * @param {Boolean} [displayErrors=false] Disallow Input field to be visually marked as invalid
 *
 * @example
 * // example.module.ts
 *  import {ButtonModule} from '../../shared/button/button.module';
 *  //...
 *  @NgModule({
 *      declarations: [ExampleComponent],
 *      imports: [
 *          CommonModule,
 *          InputModule
 *      ]
 *  })
 *
 * // example.component.ts
 *  import {FormBuilder, Validators} from '@angular/forms';
 *  //...
 *
 *  export class ExampleComponent {
 *      displayErrors = true;
 *      exampleForm = this.formBuilder.group({
 *          'email': this.formBuilder.group({
 *              'input': ['', [Validators.required, Validators.email]]
 *          })
 *      });
 *  }
 *
 * // example.component.html
 *  <app-input [type]="'text'" [name]="'email'" [placeholder]="'E-Mail Adress'" [group]="exampleForm.controls.email"
 *             [icon]="'icon-user'" [displayErrors]="displayErrors"></app-input>
 */
export class InputComponent {

    @Input() placeholder: string;
    @Input() icon: string;
    @Input() type: 'text' | 'password' | 'email';
    @Input() group: FormGroup;
    @Input() name: string;
    @Input() displayErrors?: boolean;

    constructor() {
    }
}


