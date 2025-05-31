window.onload = mostrarPosts()

window.onload = pegarNomeUsuario();

function pegarNomeUsuario() {
    if (sessionStorage.getItem("NOME_USUARIO") != null) {
        document.getElementById("div_id_usuario").classList.remove("hide")
        nome_usuario.innerHTML = sessionStorage.getItem("NOME_USUARIO")
    }
}

function limparSessão() {
    sessionStorage.clear();
    pegarNomeUsuario();
    document.getElementById("div_id_usuario").classList.add("hide")
}

function enviar() {
    var modeloVar = ipt_modelo.value
    var anoVar = ipt_ano.value
    var precoVar = ipt_preco.value
    var potenciaVar = ipt_potencia.value
    var descricaoVar = ipt_descricao.value
    var urlVar = ipt_url.value
    var fkUsuarioVar = sessionStorage.getItem("ID_USUARIO")
    var nomeVar = sessionStorage.getItem("NOME_USUARIO");

    console.log(modeloVar)
    console.log(anoVar)
    console.log(precoVar)
    console.log(potenciaVar)
    console.log(descricaoVar)
    console.log(urlVar)
    console.log(fkUsuarioVar)
    console.log(nomeVar)

    if (fkUsuarioVar == null) {
        alert("Faça login antes de fazer um post!")
        return false;
    } else if (modeloVar == "" || anoVar == "" || precoVar == "" || potenciaVar == "" || descricaoVar == "" || urlVar == "" || fkUsuarioVar == null || nomeVar == null) {
        alert("Mensagem de erro para todos os campos em branco");
        return false;
    } else {

        // Enviando o valor da nova input
        fetch("/blog/enviarPost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                modeloServer: modeloVar,
                anoServer: anoVar,
                precoServer: precoVar,
                potenciaServer: potenciaVar,
                descricaoServer: descricaoVar,
                urlServer: urlVar,
                fkUsuarioServer: fkUsuarioVar,
                nomeServer: nomeVar,

            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    console.log("Mensagem de erro para todos os campos em branco");

                    setTimeout(() => {
                        alert("Post Enviado!")
                        mostrarPosts();
                    }, "100");
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
        return false;
    }
}

function mostrarPosts() {
    fetch('/blog/pegarPosts')
        .then(response => {
            if (!response.ok) throw new Error("Ainda não há posts aqui...");
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('postContainer');

            console.log(data)

            container.innerHTML = ``

            if (data.length === 0) {
                container.innerHTML = "<p>Nenhum post encontrado.</p>";
                return;
            }

            data.forEach(post => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                            <div style="border: 1px solid #ccc; border-radius: 10px; padding: 16px; max-width: 400px; margin: 20px auto; box-shadow: 0 4px 8px rgba(0,0,0,0.1); background-color: white;">
                            <img src="${post.img}" alt="Imagem do carro" style="width: 100%; border-radius: 10px;">
                            <h2 style="margin: 12px 0 8px 0;">Modelo: ${post.modelo}</h2>
                            <p><strong>Ano:</strong> ${post.ano}</p>
                            <p><strong>Preço:</strong> R$ ${post.preco.toLocaleString("pt-BR")}</p>
                            <p><strong>Potência:</strong> ${post.potencia} cv</p>
                            <p><strong>Descrição:</strong> ${post.descricao}</p>
                            <p style="margin-top: 2px; color: #555;">Publicado por <strong>${post.nomeUsuario}</strong></p>
                            </div>
                        `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Erro:", error);
            document.getElementById('postContainer').innerHTML = `<p style="color: white;">Ainda não há posts aqui...</p>`;
        });
};