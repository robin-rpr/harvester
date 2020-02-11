import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IDropdownItem} from '../../models/dropdown-item.model';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

    @Input() icon?: string;
    @Input() value = 'NONE';
    @Input() items: IDropdownItem[];
    @Input() disabled?: boolean;
    @Output() action: EventEmitter<IDropdownItem> = new EventEmitter<IDropdownItem>();

    active: boolean;

    constructor() {
        this.active = false; // Defaults to false
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

    select(item: IDropdownItem): void {
        this.action.emit(item);
    }

}
