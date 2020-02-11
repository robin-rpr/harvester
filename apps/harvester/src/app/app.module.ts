import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OfflineModule} from './modules/core/offline/offline.module';
import {ModalModule} from './modules/core/modal/modal.module';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {reducer} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {storeFreeze} from 'ngrx-store-freeze';
import {CustomRouterSerializer} from './store/utils/router-serializer';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {JwtInterceptor} from './http/interceptor';

import * as fromGuards from './guards';
import {PwaService} from './services/pwa/pwa.service';
import {AuthService} from './services/auth/auth.service';
import {HttpService} from './services/http/http.service';
import {ErrorService} from './services/error/error.service';
import {MessageModalComponent} from './components/message-modal/message-modal.component';
import {ErrorModalComponent} from './components/error-modal/error-modal.component';
import {HookModule} from './modules/shared/hook/hook.module';
import {NAPIService} from './services/napi/napi.service';
import {HeaderModule} from './modules/core/header/header.module';
import {NavigatorModule} from './modules/shared/navigator/navigator.module';
import {TabsModule} from './modules/shared/tabs/tabs.module';
import {TelemetryService} from './services/telemetry/telemetry.service';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
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
        HttpClientModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        StoreModule.forRoot(reducer, {metaReducers}),
        EffectsModule.forRoot(effects),
        StoreRouterConnectingModule.forRoot(),
        environment.production ? [] : StoreDevtoolsModule.instrument({maxAge: 50, logOnly: true}),
        FormsModule,
        ReactiveFormsModule,
        HookModule,
        NavigatorModule,
        OfflineModule,
        ModalModule,
        HeaderModule,
        TabsModule
    ],
    providers: [
        {provide: RouterStateSerializer, useClass: CustomRouterSerializer},
        // {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        ...fromGuards.guards,
        PwaService,
        AuthService,
        HttpService,
        ErrorService,
        NAPIService,
        TelemetryService,
    ],
    entryComponents: [
        MessageModalComponent,
        ErrorModalComponent
    ],
    bootstrap: [AppComponent],
    exports: [StoreModule]
})
export class AppModule {
}
