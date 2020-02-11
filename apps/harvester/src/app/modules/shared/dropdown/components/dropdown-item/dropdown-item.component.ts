import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-dropdown-item',
    templateUrl: './dropdown-item.component.html',
    styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {

    @Input() icon?: string;
    @Input() value: string;
    @Input() disabled?: boolean;
    @Output() action: EventEmitter<Event> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    get classes() {
        const classes = {
            'component__wrapper--disabled': this.disabled,
            'component__wrapper--display-icon': this.icon,
        };
        return classes;
    }


    click(event): void {
        this.action.emit(event);
    }

}
