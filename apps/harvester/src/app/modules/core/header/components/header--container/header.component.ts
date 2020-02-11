import {Component, OnInit} from '@angular/core';
import {colorEnums} from '../../../../../enums/color.enums';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    colorEnums = colorEnums;

    constructor() {
    }

    ngOnInit() {
    }

}
