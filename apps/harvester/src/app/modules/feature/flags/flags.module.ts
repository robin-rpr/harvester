import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlagsComponent} from './components/flags--container/flags.component';
import {FlagsRoutingModule} from './flags-routing.module';
import {FlagsService} from './services/flags/flags.service';
import {ButtonModule} from '../../shared/button/button.module';

@NgModule({
    declarations: [FlagsComponent],
    imports: [
        CommonModule,
        FlagsRoutingModule,
        ButtonModule
    ],
    providers: [
        FlagsService
    ]
})
export class FlagsModule {
}
