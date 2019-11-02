import {Component, OnInit} from '@angular/core';
import {TimemachineService} from '../../../../../services/timemachine/timemachine.service';
import {AuthService} from '../../../../../services/auth/auth.service';
import {environment} from '../../../../../../environments/environment';
import {colorEnums} from '../../../../shared/button/enums/color.enums';
import {PwaService} from '../../../../../services/pwa/pwa.service';
import {Router} from '@angular/router';
import {WinRefService} from '../../../../../services/win-ref/win-ref.service';
import {combineLatest, Subscription, timer} from 'rxjs';
import {ModalService} from '../../../../core/modal/services/modal.service';
import {typeEnums} from '../../../../core/modal/enums/type.enums';
import {MessageModalComponent} from '../../../../../components/message-modal/message-modal.component';
import {ICredentialsModel} from '../../../../../models/credentials.model';
import {ErrorService} from '../../../../../services/error/error.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
/**
 * Home Component
 */
export class HomeComponent implements OnInit {

    colorEnums = colorEnums;
    typeEnums = typeEnums;
    showInstallButton: boolean;

    /**
     * @param authService Responsible for API calls
     * @param pwaService Provides Service Worker functions
     * @param router Responsible for page navigation
     * @param winRefService Providing native Window Reference
     * @param modalService Provides Modal functionality
     * @param errorService Provides Error Service
     */
    constructor(private authService: AuthService,
                public pwaService: PwaService,
                private router: Router,
                public winRefService: WinRefService,
                private modalService: ModalService,
                private errorService: ErrorService
    ) {
    }

    ngOnInit(): void {
        // FIXME: [NOASSIGN] Not unwrapping this Observable causes the Observable to never end
        this.pwaService.isAvailable(true)
            .subscribe(res => {
                this.showInstallButton = res;
            });
    }

    /**
     * Opens Native PWA Install Prompt
     */
    installPwa(): void {
        this.pwaService.install();
    }

}
