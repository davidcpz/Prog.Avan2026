function saludar (nombre="Invitado") {
    return `Hola, ${nombre}!`;
};

saludar("Juan");
saludar();

console.log(saludar("Juan"));
console.log(saludar());