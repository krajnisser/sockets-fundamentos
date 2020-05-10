var socket = io();

// Escuchar (on)
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor');
});

socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
});

// Enviar informacion (emit) al servidor
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('Respuesta del servidor:', resp);
});