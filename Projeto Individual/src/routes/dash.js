var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/resultadosUsuario", function (req, res) {
    dashController.enviarDesempenhoUsuario(req, res);
});

router.post("/listaDeChutes", function(req, res){
    dashController.enviarChutesDoUsuario(req,res);
});

router.get("/pegarListaDeChutes:idUsuario", function(req, res){
    dashController.pegarListaDeChutes(req,res);
});

module.exports = router;