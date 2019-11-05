import gql from 'graphql-tag';

export const CLIENTES_QUERY = gql `{
    getAllClientes{
        id
        nombre
        apellido
        empresa
    }
}`;