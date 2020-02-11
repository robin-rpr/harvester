import {AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, Injector} from '@angular/core';
import {typeEnums} from '../../enums/type.enums';
import {fadeAnimation, transitionAnimation} from '../../animations/modal.animation';
import {ComponentPortal, DomPortalHost} from '@angular/cdk/portal';
import {ModalService} from '../../services/modal.service';
import {ModalConfig} from '../../models/modal.interface';
import {map} from 'rxjs/operators';
import {colorEnums} from '../../../../../enums/color.enums';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    animations: [transitionAnimation, fadeAnimation]
})
/**
 * Modal Component
 *
 * @example
 * // example.module.ts
 *  import {ModalModule} from './modules/core/modal/modal.module';
 *  // ...
 *  @NgModule({
 *      declarations: [ExampleComponent],
 *      imports: [
 *          CommonModule,
 *          ModalModule
 *      ]
 *  })
 *
 * // example.component.html
 *  <app-modal></app-modal>
 */
export class ModalComponent implements AfterViewInit {

    typeEnums = typeEnums;
    colorEnums = colorEnums;

    private portalHost: DomPortalHost;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef,
        public modalService: ModalService,
    ) {
    }

    /**
     * Get CSS Classes for Align Container
     */
    get classes$() {
        return this.modalService.config$.pipe(map((config: ModalConfig) => {
            const classes = {};

            switch (config.type) {
                case typeEnums.NEUTRAL:
                    classes['align__container--neutral'] = true;
                    break;
                case typeEnums.ERROR:
                    classes['align__container--error'] = true;
                    break;
                case typeEnums.WARNING:
                    classes['align__container--warning'] = true;
                    break;
                default:
                    throw new Error(`PortalComponent doesn't support type ${config.type}`);
            }

            return classes;
        }));
    }

    ngAfterViewInit(): void {
        this.portalHost = new DomPortalHost(
            document.querySelector('#portal'),
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );

        this.modalService.config$.subscribe((config: ModalConfig) => {

            try {
                this.portalHost.attach(new ComponentPortal(config.component));
            } catch (err) {
                console.log(err);
            }
        }, err => {
            throw err;
        });

        this.modalService.visible$.subscribe((visibility: boolean) => {
            if (!visibility) {
                this.portalHost.detach();
            }
        }, err => {
            throw err;
        });
    }

    /**
     * Emits click Event
     * @param id Button ID
     */
    action(id) {
        this.modalService.click$.next(id);
    }
}


