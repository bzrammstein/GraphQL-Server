import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clientes', {useNewUrlParser: true});

//Definicion schema de cliente

const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    edad: Number,
    tipo: String,
    pedidos: Array,
    emails: Array
})

const Clientes = mongoose.model('clientes', clientesSchema);

export { Clientes };