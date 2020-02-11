import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from './components/tabs/tabs.component';
import {TabsTabComponent} from './components/tabs-tab/tabs-tab.component';

@NgModule({
    declarations: [TabsComponent, TabsTabComponent],
    exports: [
        TabsComponent,
        TabsTabComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TabsModule {
}
