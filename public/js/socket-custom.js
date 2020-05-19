var socket = io("http://localhost:3000");

///Escuchar información con on

socket.on("connect", function() {
    console.log("Conectando con el servidor");

    socket.on("disconnect", () => {
        console.log("Usuario desconectado");

    });

});

socket.on("disconnect", function() {
    console.log("Perdimos conexión con el servidor");

});

////Enviar información con emit
socket.emit("enviarMensaje", {
    usuario: "sergio",
    mensaje: "Hola Mundo"
}, function(resp) {
    console.log("respuesta server", resp);

});

///Escuchar información
socket.on("enviarMensaje", function(mensaje) {
    console.log("Servidor: ", mensaje);

});