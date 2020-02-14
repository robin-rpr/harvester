import {Injectable} from '@angular/core';
import {ErrorModalComponent} from '../../components/error-modal/error-modal.component';
import {typeEnums} from '../../modules/core/modal/enums/type.enums';
import {MessageModalComponent} from '../../components/message-modal/message-modal.component';
import {ModalService} from '../../modules/core/modal/services/modal.service';
import {IError} from '../../models/error.model';
import {DeviceService} from '../device/device.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ISystemReport} from '../../models/device.model';
import {colorEnums} from '../../enums/color.enums';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    constructor(
        private modalService: ModalService,
        private deviceService: DeviceService
    ) {
    }

    throw(error: Error | HttpErrorResponse, quiet?: boolean) {
        if (!quiet) {
            this.deviceService.systemReport().subscribe((system) => {
                this._alert(this._statifyError(error), system);
            });
        }
        throw error;
    }

    private _alert(error: IError, systemReport: ISystemReport | {}) {
        this.modalService.open({
            title: 'Runtime Error',
            component: ErrorModalComponent,
            payload: {
                error,
                systemReport
            },
            type: typeEnums.ERROR,
            backdrop: {
                pointerEvents: false,
                id: 'BACKDROP'
            },
            buttons: [
                {value: 'Dismiss', color: colorEnums.TERTIARY, id: 'DISMISS'},
                {value: 'Troubleshoot', color: colorEnums.TERTIARY, id: 'TROUBLESHOOT'},
                {value: 'Send Report', color: colorEnums.PRIMARY, disabled: true, description: 'SENTRY IS DISABLED', id: 'REPORT'},
            ]
        }).subscribe(id => {
            switch (id) {
                case 'DISMISS': {
                    this.modalService.close();
                    break;
                }
                case 'TROUBLESHOOT': {
                    this._troubleshoot();
                    break;
                }
                case 'REPORT': {
                    this.modalService.close();
                    // this.sentryService.handleError(this._nativefyError(error), {}); /* Deprecated */
                    break;
                }
                default: {
                    this.modalService.close();
                }
            }
        });
    }

    private _troubleshoot() {
        this.modalService.open({
            title: 'Troubleshoot',
            component: MessageModalComponent,
            payload: {
                message: 'Looks like you are having trouble, let\'s see if one of the following options can fix that',
                tags: 'computer angry'
            },
            type: typeEnums.NEUTRAL,
            backdrop: {
                pointerEvents: true,
                id: 'BACKDROP'
            },
            buttons: [
                {value: 'Reset Application', color: colorEnums.TERTIARY, icon: 'icon-reload-2', id: 'RESET'},
                {value: 'Cancel', color: colorEnums.PRIMARY, id: 'CANCEL'},
            ]
        }).subscribe(id => {
            switch (id) {
                case 'CANCEL': {
                    this.modalService.close();
                    break;
                }
                case 'RESET': {
                    localStorage.clear();
                    window.location.reload();
                    break;
                }
                default: {
                    this.modalService.close();
                }
            }
        });
    }

    private _nativefyError(error: IError): Error {
        const err = new Error();
        err.message = error.message;
        err.name = error.name;
        err.stack = error.stack;
        return err;
    }

    private _statifyError(error: HttpErrorResponse | Error): IError {
        return {
            name: error.name,
            status: error['status'] || 0,
            statusText: error['statusText'] || 'Unknown Error',
            message: error.message,
            stack: error['stack']
        };
    }


}
