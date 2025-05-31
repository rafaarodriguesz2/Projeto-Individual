const database = require("../database/config")

function enviarChutesDoUsuario(usuarioServer, imgServer, nomeCarroServer, precoChutadoServer, precoRealServer, assertividadeServer) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuarioServer, imgServer, nomeCarroServer, precoChutadoServer, precoRealServer, assertividadeServer);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into listaDeChutes(fkusuario, img, nomeCarro, precoChutado, precoReal, assertividade) values
(${usuarioServer}, "${imgServer}", "${nomeCarroServer}", ${precoChutadoServer}, ${precoRealServer}, ${assertividadeServer});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function pegarListaDeChutes(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        select * from listaDeChutes where fkusuario = ${idUsuario} order by id desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    // enviarDados,
    enviarChutesDoUsuario,
    pegarListaDeChutes
};