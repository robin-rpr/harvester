import {Component} from '@angular/core';
import {WinRefService} from '../../../../../services/win-ref/win-ref.service';
import {colorEnums} from '../../../../shared/button/enums/color.enums';

@Component({
    selector: 'app-offline',
    templateUrl: './offline.component.html',
    styleUrls: ['./offline.component.scss']
})

/**
 * Offline Splash Screen
 *
 * @example
 * // example.component.html
 * // ...
 * <app-offline></app-offline>
 */
export class OfflineComponent {

    colorEnums = colorEnums;
    isLoading: boolean;

    /**
     * @param winRefService Window Reference Service
     */
    constructor(
        private winRefService: WinRefService
    ) {
    }

    /**
     * Placebo page reload function
     */
    reload() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
        }, 2400);

        // TODO: Add reload functionality or leave as placebo
    }

}
