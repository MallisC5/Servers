const net = require('net');

const targetIP = process.argv[2];
const startPort = 1;
const endPort = 65535;

function scanPort(port) {
  const socket = new net.Socket();

  socket.setTimeout(3000); // Adjust the timeout as needed

  socket.on('connect', () => {
    console.log(`Port ${port} is open`);
    socket.destroy();
  });

  socket.on('timeout', () => {
    //console.log(`Port ${port} is filtered or closed`);
    socket.destroy();
  });

  socket.on('error', (error) => {
    socket.destroy();
  });

  socket.connect(port, targetIP);
}

for (let port = startPort; port <= endPort; port++) {
  scanPort(port);
}

