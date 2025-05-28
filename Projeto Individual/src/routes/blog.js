var express = require("express");
var router = express.Router();

var blogController = require("../controllers/blogController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/enviarPost", function (req, res) {
    blogController.enviarPost(req, res);
})

router.get("/pegarPosts", function (req, res) {
    blogController.buscarPosts(req, res);
});

module.exports = router;