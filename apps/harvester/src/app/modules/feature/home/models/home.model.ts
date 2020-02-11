import {ComponentType} from '@angular/cdk/portal';
import {typeEnums} from '../enums/home.enum';

export interface HomeConfig {
    component: ComponentType<{}>;
    type: typeEnums;
    payload?: any;
}
