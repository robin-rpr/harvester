import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FlagsComponent} from './components/flags/flags.component';

const routes: Routes = [
    {path: '', component: FlagsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FlagsRoutingModule {
}
