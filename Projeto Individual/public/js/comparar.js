let divResultados = document.getElementById("div_resultado_chute");
let divResultados2 = document.getElementById("div_resultado_chute2");
let divResultados3 = document.getElementById("div_resultado_chute3");
let divResultados4 = document.getElementById("div_resultado_chute4");
let divPrincipal = document.getElementById("div_principal");
let divChute = document.getElementById("div_chute_preco");
let divInicio = document.getElementById("div_inicio");
let divDash = document.getElementById("div_dash");
let salarioMinimoBrasil = 0;
let salarioMinimoEua = 0;
let salarioEscolhido = 0;
let erroPercentual = 0;
let assertividade = 0;
let numeroAleatorio = 0;
let precoChutado = 0;
let precoReal = 0;
let erro = 0;
let numAntigo = 0;
let carrosBrasil = null;
let carrosEua = null;

let tempoParaComprarEua = 0;
let tempoParaComprarBrasil = 0;

const listaCarrosBrasil = [
    {
        nome: "TESLA CYBERTRUCK",
        preco: 1799900,
        link: "https://www.webmotors.com.br/carros/estoque/tesla/cybertruck?lkid=1000&autocomplete=tesla%20c&autocompleteTerm=Tesla%20Cybertruck&tipoveiculo=carros&marca1=TESLA&modelo1=CYBERTRUCK&page=1",
    },
    {
        nome: "FORD MUSTANG",
        preco: 419900,
        link: "https://www.webmotors.com.br/carros/estoque/ford/mustang?lkid=1000&autocomplete=mustan&autocompleteTerm=Ford%20Mustang&tipoveiculo=carros&marca1=FORD&modelo1=MUSTANG&page=1",
    },
    {
        nome: "PORSCHE PANAMERA",
        preco: 599990,
        link: "https://www.webmotors.com.br/carros/estoque/porsche/panamera?lkid=1000&autocomplete=porsche%20pana&autocompleteTerm=Porsche%20Panamera&tipoveiculo=carros&marca1=PORSCHE&modelo1=PANAMERA&page=1",
    },
    {
        nome: "LAMBORGHINI HURACAN",
        preco: 4199900,
        link: "https://www.webmotors.com.br/carros/estoque/lamborghini/huracan?lkid=1000&autocomplete=lamb&autocompleteTerm=Lamborghini%20Hurac%C3%A1n&tipoveiculo=carros&marca1=LAMBORGHINI&modelo1=HURAC%C3%81N&page=1",
    },
    {
        nome: "FERRARI 458 SPIDER",
        preco: 3099990,
        link: "https://www.webmotors.com.br/carros/estoque/ferrari/458-spider?lkid=1000&autocomplete=ferrari%20458&autocompleteTerm=Ferrari%20458%20Spider&tipoveiculo=carros&marca1=FERRARI&modelo1=458%20SPIDER&page=1",
    },
    {
        nome: "VOLKSWAGEN JETTA",
        preco: 78900,
        link: "https://www.webmotors.com.br/carros/estoque/volkswagen/jetta?lkid=1000&autocomplete=jet&autocompleteTerm=Volkswagen%20Jetta&tipoveiculo=carros&marca1=VOLKSWAGEN&modelo1=JETTA&page=1",
    },
    {
        nome: "RANGE ROVER VELAR",
        preco: 319000,
        link: "https://www.webmotors.com.br/carros/estoque/land-rover/range-rover-velar?lkid=1000&autocomplete=vel&autocompleteTerm=Land%20Rover%20Range%20Rover%20Velar&tipoveiculo=carros&marca1=LAND%20ROVER&modelo1=RANGE%20ROVER%20VELAR&page=1",
    },
    {
        nome: "AUDI Q3",
        preco: 379990,
        link: "https://www.webmotors.com.br/carros-novos/estoque/audi/q3?lkid=1000&autocomplete=audi&autocompleteTerm=Audi%20Q3&tipoveiculo=carros-novos&marca1=AUDI&modelo1=Q3&page=1",
    },
];

const listaCarrosEua = [
    {
        nome: "TESLA CYBERTRUCK",
        preco: 72074,
        link: "https://www.truecar.com/used-cars-for-sale/listings/tesla/cybertruck/price-below-70000/",
    },
    {
        nome: "FORD MUSTANG",
        preco: 15900,
        link: "https://www.truecar.com/used-cars-for-sale/listings/ford/mustang/",
    },
    {
        nome: "PORSCHE PANAMERA",
        preco: 36443,
        link: "https://www.truecar.com/used-cars-for-sale/listings/porsche/panamera/",
    },
    {
        nome: "LAMBORGHINI HURACAN",
        preco: 254988,
        link: "https://www.truecar.com/used-cars-for-sale/listings/lamborghini/huracan/",
    },
    {
        nome: "FERRARI 458 SPIDER",
        preco: 259829,
        link: "https://www.truecar.com/used-cars-for-sale/listings/ferrari/458-italia/",
    },
    {
        nome: "VOLKSWAGEN JETTA",
        preco: 6999,
        link: "https://www.truecar.com/used-cars-for-sale/listings/volkswagen/jetta/",
    },
    {
        nome: "RANGE ROVER VELAR",
        preco: 28459,
        link: "https://www.truecar.com/used-cars-for-sale/listings/land-rover/range-rover-velar/",
    },
    {
        nome: "AUDI Q3",
        preco: 38369,
        link: "https://www.truecar.com/used-cars-for-sale/listings/audi/q3/",
    },
];

function iniciar() {
    numeroAleatorio = Math.floor(Math.random() * 8);

    while(numeroAleatorio == numAntigo){
        numeroAleatorio = Math.floor(Math.random() * 8);
        console.log("Refez")
    }

    divChute.classList.remove("hide");
    divInicio.classList.add("hide");
    console.log(numeroAleatorio);
    segundaPagina();
}



function segundaPagina() {
    carrosBrasil = listaCarrosBrasil[numeroAleatorio];
    carrosEua = listaCarrosEua[numeroAleatorio];

    numAntigo = numeroAleatorio;
    console.log(numAntigo);

    resultadoEua2.innerHTML = `
    <div class="titulo-segunda-pagina">
        <p>${carrosEua.nome}</p>
        <img src="../assets/banners/eua.png" class="img-pais">
    </div>
        <img src="../assets/banco_de_carros/eua/${numeroAleatorio}.jpg" class="img-carros">
        `;
}

// FALAR NO PROJETO QUE SE O CHUTE FOI MUITO DISTANTE ELE VAI CONSIDERAR COMO 0% DE ASSERTIVIDADE

function chutarPreco() {
    precoChutado = Number(document.getElementById("ipt_preco_chutado").value);
    precoReal = carrosEua.preco;
    erro = Math.abs(precoChutado - precoReal);
    erroPercentual = (erro / precoReal) * 100;
    assertividade = Math.max(0, 100 - erroPercentual).toFixed(2);
    divResultados.classList.remove("hide");
    divChute.classList.add("hide");
    console.log(precoChutado);
    calculoAssertividade();
}

function calculoAssertividade() {
    resultadoDoChute.innerHTML = `
            <h1>Você teve uma assertividade de ${assertividade} % no seu chute!</h1>
        `;
    // enviarAssertividade();
}

function precoNosEua() {
    resultadoDoChute2.innerHTML = `
            <h1>O carro ${carrosEua.nome
        } custa em média de $ ${carrosEua.preco.toLocaleString(
            "pt-BR"
        )} nos EUA 💸</h1>
            <h1>E o preço que você chutou foi de $ ${precoChutado.toLocaleString(
            "pt-BR"
        )} ❗</h1>
        `;
}

function precoNoBrasil() {
    resultadoDoChute3.innerHTML = `
            <h1>Esse mesmo carro custa em média de ${carrosBrasil.preco.toLocaleString(
        "pt-BR"
    )} no Brasil ❗</h1>
        `;
}

function resultadoTempoDeCompra() {
    resultadoDoChute4.innerHTML = `
            <h1>Com uma renda de ${Number.isNaN(salarioEscolhido)
            ? salarioMinimoBrasil
            : salarioMinimoEua
        }💸</h1>
            <h1>Nos Eua você demoraria em média de ${tempoParaComprarEua.toFixed(1)} anos para comprar esse veículo </h1>
            <h1>No Brasil você demoraria em média de ${tempoParaComprarBrasil.toFixed(1)} anos para comprar esse veículo </h1>
        `;
}

function resultados() {
    enviarChuteUsuario();
    divResultados.classList.add("hide");
    divResultados2.classList.remove("hide");
    precoNosEua();
}

function resultados2() {
    divResultados2.classList.add("hide");
    divResultados3.classList.remove("hide");
    precoNoBrasil();
}

function resultados3() {
    divResultados3.classList.add("hide");
    divResultados4.classList.remove("hide");
    calcularTempoDeCompra();
    resultadoTempoDeCompra();
}

function resultados4() {
    pegarListaDeChutes(sessionStorage.ID_USUARIO);
    divResultados4.classList.add("hide");
    divPrincipal.classList.remove("hide");
    terceiraPagina();
}

function outroCarro() {
    divChute.classList.remove("hide");
    divPrincipal.classList.add("hide");
    divDash.classList.add("hide");
    segundaPagina();
    iniciar();
}

function calcularTempoDeCompra() {
    salarioMinimoBrasil = 0;
    salarioMinimoEua = 0;
    salarioEscolhido = Number(ipt_select.value);
    carrosEua = listaCarrosEua[numeroAleatorio];
    carrosBrasil = listaCarrosBrasil[numeroAleatorio];

    console.log(salarioEscolhido);

    if (Number.isNaN(salarioEscolhido)) {
        salarioMinimoBrasil = 1516;
        salarioMinimoEua = 1256;
    } else {
        salarioMinimoBrasil = salarioEscolhido;
        salarioMinimoEua = salarioEscolhido;
    }

    tempoParaComprarEua = carrosEua.preco / salarioMinimoEua;
    tempoParaComprarBrasil = carrosBrasil.preco / salarioMinimoBrasil;

    tempoParaComprarBrasil = tempoParaComprarBrasil / 12;

    tempoParaComprarEua = tempoParaComprarEua / 12;

}

function terceiraPagina() {
    resultadoBrasil.innerHTML = `
        <img src="../assets/banco_de_carros/brasil/${numeroAleatorio}.jpg" alt="lambo" class="img-carros">
        <div class="div-titulo">
            <p class="titulo-carro">${carrosBrasil.nome}</p>
        </div>
        <p class="descricao">Preço do carro R$ ${carrosBrasil.preco.toLocaleString(
        "pt-BR"
    )}</p>
        <p class="descricao">Com uma renda de R$ ${salarioMinimoBrasil.toLocaleString(
        "pt-BR"
    )}</p> 
        <p class="descricao">Serão necessarios ${tempoParaComprarBrasil.toFixed(1)} anos para comprar esse carro<p>
        <a href="${carrosBrasil.link}" target="_blank">Link</a>
        `;

    resultadoEua.innerHTML = `
        <img src="../assets/banco_de_carros/eua/${numeroAleatorio}.jpg" alt="lambo" class="img-carros">
        <div class="div-titulo">
            <p class="titulo-carro">${carrosEua.nome}</p>
        </div>
        <p class="descricao">Preço do carro $ ${carrosEua.preco.toLocaleString(
        "pt-BR"
    )}</p> 
        <p class="descricao">Com uma renda de $ ${salarioMinimoEua.toLocaleString(
        "pt-BR"
    )}</p> 
        <p class="descricao">Serão necessarios ${tempoParaComprarEua.toFixed(1)} anos para comprar esse carro<p>
        <a href="${carrosEua.link}" target="_blank">Link</a>
        `;
}

function sair() {
    window.location = "../index.html";
}

function dash() {
    let nome = sessionStorage.getItem("NOME_USUARIO");
    let id = sessionStorage.getItem("ID_USUARIO");
    let email = sessionStorage.getItem("EMAIL_USUARIO");
    if (nome == null && id == null && email == null) {
        window.location = "../pages/login.html";
    } else {
        b_usuario.innerHTML = nome;
        divDash.classList.remove("hide");
        chamarGraficos();
    }
}

b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

let proximaAtualizacao;

function chamarGraficos() {
    const idUsuario = sessionStorage.ID_USUARIO;

    graficos.innerHTML = `
        <canvas id="myChartCanvas${idUsuario}"></canvas>
        `;
    obterDadosGrafico(idUsuario);
}

function obterDadosGrafico(idUsuario) {
    console.log(idUsuario);

    fetch(`/medidas/ultimas/${sessionStorage.ID_USUARIO}`, { cache: "no-store" })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    plotarGrafico(resposta, idUsuario);
                });
            } else {
                console.error("Nenhum dado encontrado ou erro na API");
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e,
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(resposta, idUsuario) {
    console.log("iniciando plotagem do gráfico...");
    // console.log("essa é a resposta", resposta[2].assertividade);
    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [
            {
                label: "% Assertividade ",
                data: [],
                fill: false,
                backgroundColor: "rgb(46, 204, 113)",
                borderColor: "rgb(46, 204, 113)",
                tension: 0.1,
            },
        ],
    };

    console.log("----------------------------------------------");
    console.log(
        'Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":'
    );
    console.log(resposta);

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(resposta[i].assertividade);
        dados.datasets[0].data.push(resposta[i].assertividade);
        // dados.datasets[1].data.push(registro.temperatura);
    }

    console.log("----------------------------------------------");
    console.log("O gráfico será plotado com os respectivos valores:");
    console.log("Labels:");
    console.log(labels);
    console.log("Dados:");
    console.log(dados.datasets);
    console.log("----------------------------------------------");

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: "bar",
        data: dados,
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(`myChartCanvas${idUsuario}`),
        config
    );

    setTimeout(() => atualizarGrafico(idUsuario, dados, myChart), 5000);
}

// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas,

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models

// 

function enviarChuteUsuario() {
    // Agora vá para o método fetch logo abaixo
    var assertividadeVar = assertividade;
    var idUsuario = sessionStorage.ID_USUARIO;
    var nomeVar = carrosBrasil.nome;
    var imgVar = `../assets/banco_de_carros/eua/${numeroAleatorio}.jpg`;

    console.log(assertividadeVar);
    console.log(idUsuario);
    console.log(nomeVar);
    console.log(imgVar);
    console.log(precoReal);
    console.log(precoChutado);

    fetch("/dash/listaDeChutes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            usuarioServer: idUsuario,
            imgServer: imgVar,
            nomeCarroServer: nomeVar,
            precoChutadoServer: precoChutado,
            precoRealServer: precoReal,
            assertividadeServer: assertividadeVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                setTimeout(() => { }, "2000");
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    return false;
}

function pegarListaDeChutes(idUsuario) {

    fetch(`/dash/pegarListaDeChutes${idUsuario}`)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao buscar posts");
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('listaDeChutes');

            console.log(data)

            container.innerHTML = ``

            if (data.length === 0) {
                container.innerHTML = "<p>Nenhum post encontrado.</p>";
                return;
            }
            let i = data.length
            data.forEach(post => {
                const card = document.createElement("div");

                card.className = "div-resultados-2";
                card.innerHTML = `
                            <h3>${i}º Chute</h3>
                            <div class="elementos-row">
                                <img src="${post.img}" alt="Imagem do carro" class="img-resultado2">
                                <div class="elementos-column">
                                    <p>Asssertividade: ${post.assertividade} %</p>
                                    <progress value="${post.assertividade}" max="100" class="progress"></progress>
                                </div>
                            </div>
                            <div class="elementos-row-p" style="margin-top: 10px">
                                <p class="margin">Nome:${post.nomeCarro} </p>
                                <p class="margin">Preço Chutado: $${post.precoChutado.toLocaleString("pt-BR")}</p>
                                <p class="margin">Preço Real: $${post.precoReal.toLocaleString("pt-BR")} </p>
                            </div>
                            <hr>
                        `;
                container.appendChild(card);
                i--
            });
        })
        .catch(error => {
            console.error("Erro:", error);
            document.getElementById('postContainer').innerHTML = "<p>Erro ao carregar posts.</p>";
        });
}

/*Chart JS*/

const ctx = document.getElementById("myChart");
const ctx2 = document.getElementById("myChart2");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

new Chart(ctx2, {
    type: "line",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});