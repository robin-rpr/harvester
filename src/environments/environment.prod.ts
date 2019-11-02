export const environment = {
    production: false,
    title: 'Harvester',
    api: 'https://api.harvester.dev/',
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
