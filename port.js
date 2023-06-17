const net = require('net');

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: node tcp-ping.js <hostname or IP address> <port>');
  process.exit(1);
}

const host = args[0];
const port = parseInt(args[1]);

function ping() {
  const startTime = Date.now();
  const client = net.createConnection({ host, port });

  client.setTimeout(1000);
  client.on('connect', () => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    console.log(`-> ${host}:${port} is up (response time: ${responseTime}ms)`);
    client.end();
  });

  client.on('timeout', () => {
    console.log(`-> ${host}:${port} is down`);
    client.destroy();
  });

  client.on('error', () => {
    console.log(`${host}:${port} is down`);
  });
}

setInterval(ping, 1000);