import {Component, OnInit} from '@angular/core';
import {colorEnums} from '../../../../../enums/color.enums';
import {IDropdownItem} from '../../../../shared/dropdown/models/dropdown-item.model';

@Component({
    selector: 'app-footer-controls',
    templateUrl: './footer-controls.component.html',
    styleUrls: ['./footer-controls.component.scss']
})
export class FooterControlsComponent implements OnInit {

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
