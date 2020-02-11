import {typeEnums} from '../enums/type.enums';
import {ComponentType} from '@angular/cdk/portal';
import {colorEnums} from '../../../../enums/color.enums';

export interface ModalConfig {
    title: string;
    component: ComponentType<{}>;
    payload?: any;
    type: typeEnums;
    backdrop: Backdrop;
    buttons: Button[];
}

interface Backdrop {
    pointerEvents: boolean;
    id: string;
}

interface Button {
    value: string;
    icon?: string;
    loading?: boolean;
    disabled?: boolean;
    color: colorEnums;
    description: string;
    id: string;
}
