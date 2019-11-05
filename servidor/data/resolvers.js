import mongoose from 'mongoose';
import { Cliente, Clientes } from './db';
import { rejects } from 'assert';

export const resolvers = {
    Query: {
        getCliente: (root, {id}) => {
            return new Promise((resolve, object) => {
                Clientes.findOne({_id : id}, (error, cliente) => {
                    if(error) rejects(error)
                    else resolve(cliente)
                });
            });
        },
        getAllClientes : (root, {limite}) => {
            return Clientes.find({}).limit(limite)
        },
    },
    Mutation: {
        crearCliente : (root, args) => {
            console.log(args);
        },
        actualizarCliente: (root, {input}) => {
                return new Promise((resolve, object) => {
                    Clientes.findOneAndUpdate({_id : input.id}, input, {new: true}, (error, cliente) => {
                        if(error) rejects(error)
                        else resolve(cliente)
                });
            });
        },
        eliminarCliente: (root, {id}) => {
            return new Promise((resolve, object) => {
                Clientes.findOneAndRemove({_id : id}, (error) => {
                    if(error) rejects(error)
                    else resolve("Se Elimino Correctamente")
                });
            });
        },
    }
}