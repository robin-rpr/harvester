import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '../../shared/button/button.module';
import {HomeComponent} from "./components/home--container/home.component";

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
