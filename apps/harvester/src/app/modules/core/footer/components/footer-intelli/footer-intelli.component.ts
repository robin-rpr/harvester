import {Component, OnInit} from '@angular/core';
import {colorEnums} from '../../../../../enums/color.enums';

@Component({
    selector: 'app-footer-intelli',
    templateUrl: './footer-intelli.component.html',
    styleUrls: ['./footer-intelli.component.scss']
})
export class FooterIntelliComponent implements OnInit {

    colorEnums = colorEnums;

    constructor() {
    }

    ngOnInit() {
    }

}
