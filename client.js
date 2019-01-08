const net = require('net');
const host = process.argv[2];
const port = Number(process.argv[3]);

const socket = net.connect(port, host)	//creates a socket instance and begin connecing to server

socket.on('connect', () => {	//when a connection to the server is established
	process.stdin.pipe(socket);	//pipe process's stdin to socket
	socket.pipe(process.stdout); //pipe socket's data to process stdout
	process.stdin.resume(); 	//call resume() on stdin to begin reading data
});

socket.on('end', () => {
	process.stdin.pause()	//pause stdin
});
