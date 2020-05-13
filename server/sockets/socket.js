const {io} = require('../server');
const {TicketControl} = require('../classes/ticket-control');

const ticketControl = new TicketControl();
ticketControl.reiniciarConteo();

io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {

        var nuevoTicket = ticketControl.siguienteTicket();

        console.log(nuevoTicket);

        callback(nuevoTicket);
        
    });

    client.on('getUltimo', (data, callback) => {
        
        var ultimoTicket = ticketControl.getUltimoTicket();
        callback(ultimoTicket);

    });

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    });

    client.on('atenderTicket', (data, callback) => {

        console.log(data);

        if(!data.escritorio){
            return callback({
                err: true,
                message: 'El escritorio es necesario'
            });
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        callback(atenderTicket);

        // actualizar cambios en los ultimos 4 en la pantalla
        client.broadcast.emit('estadoActual', {
            actual: ticketControl.getUltimoTicket(),
            ultimos4: ticketControl.getUltimos4()
        });

    });

});