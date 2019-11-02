const {exec} = require('child_process');

exec('git config core.hooksPath .githooks', (error, stdout, stderr) => {
    if (error) {
        throw `⚠️ [BOOTSTRAP-ENV] ${error}`;
    }

    console.log('🚜 [BOOTSTRAP-ENV] Success')
});

