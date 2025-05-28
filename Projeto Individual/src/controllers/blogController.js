var blogModel = require("../models/blogModel");

// CADASTRAR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function enviarPost(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkusuario = req.body.fkUsuarioServer
    var nome = req.body.nomeServer;
    var url = req.body.urlServer;
    var descricao = req.body.descricaoServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    blogModel.enviar(fkusuario, nome, url, descricao)
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