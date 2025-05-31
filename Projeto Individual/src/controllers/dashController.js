var dashModel = require('../models/dashModel');


function enviarChutesDoUsuario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var { usuarioServer } = req.body;
    var { imgServer } = req.body;
    var { nomeCarroServer } = req.body;
    var { precoChutadoServer } = req.body;
    var { precoRealServer } = req.body;
    var { assertividadeServer } = req.body;

    console.log(assertividadeServer)
    console.log(assertividadeServer)

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    dashModel.enviarChutesDoUsuario(usuarioServer, imgServer, nomeCarroServer, precoChutadoServer, precoRealServer, assertividadeServer)
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

        return false
}

function pegarListaDeChutes(req, res) {

    var idUsuario = req.params.idUsuario;
    
    dashModel.pegarListaDeChutes(idUsuario)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum post encontrado.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar posts:", erro);
            res.status(500).json(erro.sqlMessage || erro.message);
        });
}

module.exports = {
    enviarChutesDoUsuario,
    pegarListaDeChutes
}