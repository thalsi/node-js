const os = require('os');

console.log('--- System Information ---');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('OS Type:', os.type());
console.log('Release:', os.release());
console.log('Version:', os.version());
console.log('Hostname:', os.hostname());
console.log('Home Directory:', os.homedir());
console.log('Total Memory (GB):', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2));
console.log('Free Memory (GB):', (os.freemem() / 1024 / 1024 / 1024).toFixed(2));
console.log('CPU Count:', os.cpus().length);
console.log('System Uptime (hours):', (os.uptime() / 3600).toFixed(2));