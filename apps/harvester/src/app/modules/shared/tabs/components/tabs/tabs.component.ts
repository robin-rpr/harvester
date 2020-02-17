import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {ITab} from '../../models/tabs.model';
import {TabsTabComponent} from '../tabs-tab/tabs-tab.component';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {
    @ContentChildren(TabsTabComponent) tabs: QueryList<TabsTabComponent>;

    constructor() {
    }

    ngOnInit() {
    }

    // contentChildren are set
    ngAfterContentInit() {
        // get all active tabs
        const activeTabs = this.tabs.filter((tab) => tab.active);

        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.select(this.tabs.first);
        }
    }

    select(tab: ITab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(tab => tab.active = false);

        // activate the tab the user has clicked on.
        tab.active = true;
    }

}
