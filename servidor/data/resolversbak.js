const nuevoCliente = new Clientes({
    nombre: input.nombre,
    apellido: input.apellido,
    empresa: input.empresa,
    edad: input.edad,
    tipo: input.tipo,
    pedidos: input.pedidos,
    emails: input.emails
});
nuevoCliente.id = nuevoCliente._id;
console.log(input);

return new Promise((resolve, object) => {
    nuevoCliente.save((error) => {
        if(error) rejects(error)
        else resolve(nuevoCliente)
    });
});