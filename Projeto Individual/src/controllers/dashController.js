var dashModel = require('../models/dashModel');


function enviarDesempenhoUsuario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var  { assertividadeServer }  = req.body;

    console.log(assertividadeServer)

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    dashModel.enviarDados(assertividadeServer)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao enviar assertividade para o banco! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    enviarDesempenhoUsuario
}