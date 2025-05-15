var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    console.log(idUsuario)

    var instrucaoSql = `SELECT 
                    assertividade
                    FROM dashBoard
                    WHERE fkusuario = ${idUsuario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    var instrucaoSql = `SELECT 
                        assertividade 
                        FROM dashBoard WHERE fkusuario = ${idUsuario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
