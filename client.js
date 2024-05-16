const net = require('net');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = new net.Socket();
client.connect(5000, '127.0.0.1', () => {
    console.log("Conectado al servidor");
    readline.on('line', (input) => {
        client.write(input);
    });
});

client.on('data', data => {
    console.log('Servidor dice:', data.toString());
});

client.on('close', () => {
    console.log('Conexión con el servidor cerrada');
});