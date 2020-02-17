import {Component, OnInit, Input} from '@angular/core';
import {colorEnums} from '../../../../../enums/color.enums';
import {INavigator} from "../../../../shared/navigator/models/navigator.model";

@Component({
    selector: 'app-header-navigator',
    templateUrl: './header-navigator.component.html',
    styleUrls: ['./header-navigator.component.scss']
})
export class HeaderNavigatorComponent implements OnInit {

    @Input() nodes: INavigator;

    colorEnums = colorEnums;

    constructor() {
    }

    ngOnInit() {
    }

}
