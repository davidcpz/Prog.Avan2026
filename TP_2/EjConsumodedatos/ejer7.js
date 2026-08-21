async function enviarDatos(data) {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const resultado = await respuesta.json();

    console.log(resultado);
}

const nuevoPost = {
    title: "Mi primer post",
    body: "Contenido de prueba",
    userId: 1
};

enviarDatos(nuevoPost);
