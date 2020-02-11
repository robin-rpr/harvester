import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownItemComponent } from './components/dropdown-item/dropdown-item.component';



@NgModule({
    declarations: [DropdownComponent, DropdownItemComponent],
    exports: [
        DropdownComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DropdownModule { }
