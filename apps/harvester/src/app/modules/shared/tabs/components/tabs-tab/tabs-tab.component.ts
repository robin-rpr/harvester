import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tabs-tab',
    templateUrl: './tabs-tab.component.html',
    styleUrls: ['./tabs-tab.component.scss']
})
export class TabsTabComponent implements OnInit {

    @Input() title: string;
    @Input() description: string;
    @Input() active: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
