const net = require('net');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const server = net.createServer(con => {
    console.log('Cliente conectado.');
    con.on('data', data => {
        console.log('Cliente dice:', data.toString());
    });
    readline.on('line', (input) => {
        con.write(input);
    });
});

server.listen(5000, '127.0.0.1', () => console.log('Servidor escuchando en el puerto 5000'));

