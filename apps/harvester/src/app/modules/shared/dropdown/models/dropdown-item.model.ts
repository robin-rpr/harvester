import {colorEnums} from '../../../../enums/color.enums';

export interface IDropdownItem {
    icon?: string;
    value?: string;
    color: colorEnums;
    disabled?: boolean;
}
