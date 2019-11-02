const {exec} = require('child_process');

exec('git config core.hooksPath .githooks', (error, stdout, stderr) => {
    if (error) {
        throw `⚠️ [SETUP-GITHOOKS] ${error}`;
    }

    console.log('🚜 [SETUP-GITHOOKS] Success')
});

