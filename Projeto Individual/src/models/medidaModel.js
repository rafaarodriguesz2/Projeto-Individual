var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    console.log(idUsuario)

    var instrucaoSql = `select assertividade from listaDeChutes where fkusuario = ${idUsuario} order by id desc limit ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    var instrucaoSql = `select assertividade from listaDeChutes where fkusuario = ${idUsuario} order by id desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
