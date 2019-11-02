import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '../../shared/button/button.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ButtonModule,
        ReactiveFormsModule,
    ],
})
export class HomeModule {
}
