// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    title: 'Harvester Local',
    api: 'https://localhost:8010/',
    flags: {
        SUPER_SECRET_SETTING: false, /* @action: It's a secret! */
        ALLOW_LEGACY_STORAGE: true, /* @action: Allows the use of LocalStorage */
    },
    config: {
        storageMap: {
            keychain: {
                credentials: "KEYCHAIN_CREDENTIALS", /* @desc: Authentication Credentials */
                flags: "KEYCHAIN_FLAGS", /* @desc: Internal Flags Cache */
                pwa: "KEYCHAIN_PWA" /* @desc: Internal PWA metrics */
            },
            subscriberInterval: 2000, /* @desc: StorageMap Dynamic Caching Timeout */
        },
        bodyStyle: {
            backgroundColor: '#2c3338',
            margin: 'unset',
            height: '100vh',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '1.5'
        }
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
