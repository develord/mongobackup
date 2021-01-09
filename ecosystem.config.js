module.exports = {
  apps: [
    {
      name: 'mangoBackup',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: './index.js',
      args: ''
    }
  ]
}
