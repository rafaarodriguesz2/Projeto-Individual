var blogModel = require("../models/blogModel");

// CADASTRAR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function enviarPost(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var modelo = req.body.modeloServer
    var ano = req.body.anoServer
    var preco = req.body.precoServer
    var potencia = req.body.potenciaServer
    var descricao = req.body.descricaoServer
    var url = req.body.urlServer
    var nome = req.body.nomeServer
    var fkusuario = req.body.fkUsuarioServer


    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    blogModel.enviar(modelo, ano, preco, potencia,descricao, url, nome, fkusuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarPosts(req, res) {
    blogModel.mostrarPosts()
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
    enviarPost,
    buscarPosts
}