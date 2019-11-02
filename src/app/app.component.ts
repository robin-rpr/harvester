import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {DeviceService} from './services/device/device.service';
import {transitionAnimation} from './animations/offline.animation';
import {AuthService} from './services/auth/auth.service';
// @ts-ignore:disable-next-line
import {version} from '../../package.json';
import {environment} from '../environments/environment';
import {PwaService} from './services/pwa/pwa.service';
import {Title} from '@angular/platform-browser';
import {FlagsService} from './modules/feature/flags/services/flags/flags.service';
import {colorEnums} from './modules/shared/button/enums/color.enums';
import {MessageModalComponent} from './components/message-modal/message-modal.component';
import {typeEnums} from './modules/core/modal/enums/type.enums';
import {ModalService} from './modules/core/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [transitionAnimation]
})

/**
 * Main App Component
 */
export class AppComponent implements AfterViewInit, OnInit {

  isOnline: boolean;
  version: string;
  colorEnums = colorEnums;
  environment = environment;

  /**
   * @param elementRef Element Reference
   * @param deviceService Native Device Service
   * @param authService Provides Credentials
   * @param pwaService Provides PWA Functionality
   * @param titleService Provides Angular Browser Title Service
   * @param flagsService Experimental Flags Service
   * @param modalService Provides Modal functionality
   */
  constructor(private elementRef: ElementRef,
              private authService: AuthService,
              private pwaService: PwaService,
              private titleService: Title,
              public deviceService: DeviceService,
              private flagsService: FlagsService,
              private modalService: ModalService,
  ) {
    this.isOnline = this.deviceService.nativeNetStat;
    this.version = version;
    this.titleService.setTitle(environment.title);
  }

  async ngOnInit() {

    await this.flagsService.sync(); // Initial Sync

    this.deviceService.offline.pipe().subscribe((event) => {
      this.isOnline = false;
    });

    this.deviceService.online.pipe().subscribe((event) => {
      this.isOnline = true;
    });

    this.pwaService.update.available.subscribe((event) => {
      this.modalService.open({
        title: 'Update available',
        component: MessageModalComponent,
        payload: {
          message: `A new Version for ${environment.title} is available. Do you want to Update?`,
          tags: 'Update available'
        },
        type: typeEnums.NEUTRAL,
        backdrop: {
          pointerEvents: false,
          id: 'BACKDROP'
        },
        buttons: [
          {value: 'Never mind', color: colorEnums.TERTIARY, id: 'IGNORE'},
          {
            value: 'Update',
            color: colorEnums.SENARY,
            id: 'UPDATE'
          },
        ]
      }).subscribe(id => {
        switch (id) {
          case 'UPDATE': {
            window.location.reload();
            break;
          }
          default:
            this.modalService.close();
        }
      });
    });
  }

  ngAfterViewInit() {

    for (const key in environment.config.bodyStyle) {
      if (environment.config.bodyStyle.hasOwnProperty(key)) {
        this.elementRef.nativeElement.ownerDocument.body.style[key] = environment.config.bodyStyle[key];
      }
    }
  }

}
