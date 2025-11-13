# What is the os Module?

The os module in Node.js provides information about your operating system — such as CPU details, memory, hostname, architecture, etc.

You can use it to:
  - Monitor system resources
  - Log system details
  - Optimize application behavior depending on OS type

## ⚙️ Importing the os Module
```
const os = require('os');

```
Now you can use all of its methods.

1. os.arch()

Returns the CPU architecture of your system (x64, arm, etc.)
```
console.log('CPU Architecture:', os.arch());

```

```
CPU Architecture: x64

```


2. os.platform()

Returns the operating system platform — like win32, linux, darwin.

```
console.log('Platform:', os.platform());

```

```
Platform: win32

```


3. os.type()

Returns the OS name — like Windows_NT, Linux, or Darwin.

```
console.log('OS Type:', os.type());

```

4. os.release()

Returns the OS version.

```
console.log('OS Release:', os.release());

```

```
OS Release: 10.0.22631

```

5. os.hostname()

Returns the computer’s hostname.

```

console.log('Hostname:', os.hostname());

```


6. os.userInfo()

Returns information about the current user (object).
```
console.log('User Info:', os.userInfo());

```

```
{
  uid: -1,
  gid: -1,
  username: 'Thasleeh',
  homedir: 'C:\\Users\\Thasleeh',
  shell: null
}

```

7. os.homedir()

Returns the path of the home directory for the current user.

```
console.log('Home Directory:', os.homedir());

```


8. os.tmpdir()

Returns the default temporary files directory.

```
console.log('Temp Directory:', os.tmpdir());

```


9. os.totalmem()

Returns the total system memory in bytes.

```
console.log('Total Memory:', os.totalmem(), 'bytes');

```
💡 You can convert it to MB or GB:
```
console.log('Total Memory (GB):', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2));

```

10. os.freemem()

Returns the free (available) system memory in bytes.
```
console.log('Free Memory (GB):', (os.freemem() / 1024 / 1024 / 1024).toFixed(2));

```

11. os.uptime()

Returns the system uptime in seconds (how long the system has been running).
```
console.log('System Uptime (seconds):', os.uptime());

```

💡 Convert to hours:

```
console.log('System Uptime (hours):', (os.uptime() / 3600).toFixed(2));

```

12. os.cpus()

Returns an array of CPU information (core details).

```
console.log('CPU Info:', os.cpus());

```

```
[
  {
    model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
    speed: 1800,
    times: { user: 12345, nice: 0, sys: 4567, idle: 7890123, irq: 0 }
  },
  ...
]

```

13. os.networkInterfaces()

Returns network interface information like IP address and MAC address.
```
console.log('Network Interfaces:', os.networkInterfaces());

```

```
{
  Wi-Fi: [
    { address: '192.168.1.5', family: 'IPv4', mac: '00-14-22-01-23-45', internal: false }
  ]
}

```

14. os.endianness()

Returns the endianness of the CPU (BE or LE).
```
console.log('Endianness:', os.endianness());

```

15. os.version()

Returns the complete OS version string.

```
console.log('OS Version:', os.version());

```
