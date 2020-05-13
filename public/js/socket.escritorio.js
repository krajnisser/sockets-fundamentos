// Comando para establecer la conexión
var socket = io();

var small = $('small');

var searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
// console.log(escritorio);


$('.numEscritorio').text(`Escritorio ${escritorio}`);


$('button').on('click', function(){

    socket.emit('atenderTicket', {escritorio: escritorio}, function(resp){
        console.log(resp);

        if(resp === 'No hay tickets'){
            small.text(resp);
            alert(resp);
            return;
        }

        small.text('Ticket ' + resp.numero);
    });

});