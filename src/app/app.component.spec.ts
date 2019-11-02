import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MessageModalComponent} from './components/message-modal/message-modal.component';
import {ErrorModalComponent} from './components/error-modal/error-modal.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from './modules/shared/button/button.module';
import {OfflineModule} from './modules/core/offline/offline.module';
import {ModalModule} from './modules/core/modal/modal.module';
import {PwaService} from './services/pwa/pwa.service';
import {AuthService} from './services/auth/auth.service';
import {HttpService} from './services/http/http.service';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {effects} from "./store/effects";
import {RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {metaReducers} from "./app.module";
import {CustomRouterSerializer} from "./store/utils/router-serializer";
import {JwtInterceptor} from "./http/interceptor";
import * as fromGuards from "./guards";
import {ErrorService} from "./services/error/error.service";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessageModalComponent,
        ErrorModalComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        OfflineModule,
        ModalModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        StoreModule.forRoot(reducer, {metaReducers}),
        EffectsModule.forRoot(effects),
        StoreRouterConnectingModule.forRoot(),
        environment.production ? [] : StoreDevtoolsModule.instrument({maxAge: 50, logOnly: true}),
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        OfflineModule,
        ModalModule
      ],
      providers: [
        { provide: RouterStateSerializer, useClass: CustomRouterSerializer },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        ...fromGuards.guards,
        PwaService,
        AuthService,
        HttpService,
        ErrorService
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
