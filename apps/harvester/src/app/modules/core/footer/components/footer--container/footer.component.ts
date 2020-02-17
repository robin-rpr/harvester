import {Component, OnInit} from '@angular/core';
import {colorEnums} from '../../../../../enums/color.enums';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    colorEnums = colorEnums;

    constructor() {
    }

    ngOnInit() {
    }

}
