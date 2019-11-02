export const environment = {
    production: false,
    title: 'Harvester Local',
    api: 'https://api.develop.harvester.dev/',
    flags: {
        SUPER_SECRET_SETTING: false, /* @action: It's a secret! */
    },
    config: {
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
