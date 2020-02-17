import {colorEnums} from "../../../../enums/color.enums";

export interface INavigator {
    title: string;
    error?: boolean;
    color?: colorEnums;
    icon?: string;
}