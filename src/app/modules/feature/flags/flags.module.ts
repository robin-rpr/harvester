import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlagsComponent} from './components/flags--container/flags.component';
import {ButtonModule} from '../../shared/button/button.module';
import {FlagsRoutingModule} from './flags-routing.module';
import {FlagsService} from './services/flags/flags.service';

@NgModule({
    declarations: [FlagsComponent],
    imports: [
        CommonModule,
        FlagsRoutingModule,
        ButtonModule,
    ],
    providers: [
        FlagsService
    ]
})
export class FlagsModule {
}
