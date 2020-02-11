import {Component, OnInit} from '@angular/core';
import {colorEnums} from '../../../../../enums/color.enums';
import {IDropdownItem} from '../../../../shared/dropdown/models/dropdown-item.model';

@Component({
    selector: 'app-header-controls',
    templateUrl: './header-controls.component.html',
    styleUrls: ['./header-controls.component.scss']
})
export class HeaderControlsComponent implements OnInit {

    colorEnums = colorEnums;
    items: IDropdownItem[];

    constructor() {
        this.items = [
            {
                value: 'Edit configurations...',
                color: colorEnums.PRIMARY,
            },
            {
                icon: 'tio-folder',
                value: 'Angular Application',
                color: colorEnums.SECONDARY,
            },
            {
                icon: 'tio-lock',
                value: 'example',
                color: colorEnums.SENARY,
            }
        ];
    }

    ngOnInit() {
    }

}
