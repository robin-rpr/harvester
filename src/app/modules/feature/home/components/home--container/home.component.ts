import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../../services/auth/auth.service';
import {PwaService} from '../../../../../services/pwa/pwa.service';
import {Router} from '@angular/router';
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
