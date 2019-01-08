const net = require('net');

net.createServer((socket) => {
	console.log('Socket connected.');
	socket.on('data', (data) => { 	//data event, can happen multiple times
		console.log('"data" event', data);
	})

	socket.on('end', () => {		//when a socket ends, happens once per socket
		console.log('"end" event');
	})

	socket.on('close', () => {
		console.log('"close" event'); 	//when a socket closes
	})

	socket.on('error', (e) => {	//to catch error event
		console.log('"error" event', e);
	})

	socket.pipe(socket);	//echo data back to client
}).listen(3000, () => {
	console.log('tcp server started on port 3000')
});
