// WARNING: DO NOT STORE CREDENTIALS HERE!

export const environment = {
    production: true,
    title: 'Harvester',
    api: {
        target: 'https://api.harvester.dev',
        secure: true
    },
    flags: {
        SUPER_SECRET_SETTING: false, /* @action: It's a secret! */
        ALLOW_LEGACY_STORAGE: true, /* @action: Allows the use of LocalStorage */
    },
    config: {
        devTools: {
            title: 'Harvester',
            icon: 'src/assets/icons/icon48.png',
            pagePath: 'index.html'
        },
        storageMap: {
            keychain: {
                credentials: 'KEYCHAIN_CREDENTIALS', /* @desc: Authentication Credentials */
                flags: 'KEYCHAIN_FLAGS', /* @desc: Internal Flags Cache */
                pwa: 'KEYCHAIN_PWA' /* @desc: Internal PWA metrics */
            },
            subscriberInterval: 2000, /* @desc: StorageMap Dynamic Caching Timeout */
        },
        bodyStyle: {
            backgroundColor: '#0F1119',
            margin: 'unset',
            fontFamily: 'Open Sans, sans-serif',
            height: '100vh',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '1.5',
            'min-width': '688px',
        }
    }
};
