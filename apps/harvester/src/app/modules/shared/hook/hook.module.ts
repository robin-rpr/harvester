import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HookComponent} from './components/hook/hook.component';

@NgModule({
    declarations: [HookComponent],
    imports: [
        CommonModule
    ],
    exports: [HookComponent]
})
export class HookModule {
}
