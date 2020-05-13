var socket = io();

socket.on('estadoActual', function(data){
    
    console.log(data);

    actualizarPantalla(data);
});

function actualizarPantalla(data){

    $('#lblTicket1').text(`Ticket ${data.ultimos4[0].numero}`);
    $('#lblEscritorio1').text(`Escritorio ${data.ultimos4[0].escritorio}`);

    $('#lblTicket2').text(`Ticket ${data.ultimos4[1].numero}`);
    $('#lblEscritorio2').text(`Escritorio ${data.ultimos4[1].escritorio}`);

    $('#lblTicket3').text(`Ticket ${data.ultimos4[2].numero}`);
    $('#lblEscritorio3').text(`Escritorio ${data.ultimos4[2].escritorio}`);

    $('#lblTicket4').text(`Ticket ${data.ultimos4[3].numero}`);
    $('#lblEscritorio4').text(`Escritorio ${data.ultimos4[3].escritorio}`);

}