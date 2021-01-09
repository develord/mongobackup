const cron = require('node-cron'), spawn = require('child_process').spawn;

let dbBackupTask = cron.schedule('* * */1 * *', () => {
    let backupProcess = spawn('mongodump', [
        '--db=charpa',
        '--archive=./',
        '--gzip'
      ]);

    backupProcess.on('exit', (code, signal) => {
        if(code) 
            console.log('Backup process exited with code ', code);
        else if (signal)
            console.error('Backup process was killed with singal ', signal);
        else 
            console.log('Successfully backedup the database')
    });
});