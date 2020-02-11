import {Component, OnInit} from '@angular/core';
import {colorEnums} from '../../../../../enums/color.enums';

@Component({
    selector: 'app-header-navigator',
    templateUrl: './header-navigator.component.html',
    styleUrls: ['./header-navigator.component.scss']
})
export class HeaderNavigatorComponent implements OnInit {

    colorEnums = colorEnums;

    constructor() {
    }

    ngOnInit() {
    }

}
