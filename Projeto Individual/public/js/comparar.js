let divResultados = document.getElementById("div_resultado_chute");
let divResultados2 = document.getElementById("div_resultado_chute2");
let divResultados3 = document.getElementById("div_resultado_chute3");
let divResultados4 = document.getElementById("div_resultado_chute4");
let divPrincipal = document.getElementById("div_principal");
let divChute = document.getElementById("div_chute_preco");
let divInicio = document.getElementById("div_inicio");
let divDash = document.getElementById("div_dash");
let salarioMinimoBrasil = 0
let salarioMinimoEua = 0
let salarioEscolhido = 0;
let erroPercentual = 0;
let assertividade = 0;
let numeroAleatorio = 0;
let precoChutado = 0;
let precoReal = 0;
let erro = 0;
let carrosBrasil = null;
let carrosEua = null;

let tempoParaComprarEua = 0;
let tempoParaComprarBrasil = 0;

const listaCarrosBrasil = [
    { nome: "TESLA CYBERTRUCK", preco: 1799900, link: "https://www.webmotors.com.br/comprar/tesla/cybertruck/1224-kw-eletrico-awd/4-portas/2024/57267695" },
    { nome: "FORD MUSTANG", preco: 419900, link: "https://www.webmotors.com.br/comprar/ford/mustang/50-v8-ti-vct-gasolina-black-shadow-selectshift/2-portas/2020/58116933" },
    { nome: "PORSCHE PANAMERA", preco: 599990, link: "https://www.webmotors.com.br/comprar/porsche/panamera/29-v6-e-hybrid-4s-pdk/4-portas/2020-2021/58408551" },
    { nome: "LAMBORGHINI HURACAN", preco: 4199900, link: "https://www.webmotors.com.br/comprar/lamborghini/huracan/52-v10-gasolina-lp-640-4-performante-ldf/2-portas/2019/58057208" },
    { nome: "FERRARI 458 SPIDER", preco: 3099990, link: "https://www.webmotors.com.br/comprar/ferrari/458-spider/45-v8-gasolina-f1-dct/2-portas/2014-2015/56411366" },
    { nome: "VOLKSWAGEN JETTA", preco: 78900, link: "https://www.webmotors.com.br/comprar/volkswagen/jetta/20-tsi-highline-211cv-gasolina-4p-tiptronic/4-portas/2014/54125409" },
    { nome: "RANGE ROVER VELAR", preco: 319000, link: "https://www.webmotors.com.br/comprar/land-rover/range-rover-velar/20-p300-gasolina-r-dynamic-se-automatico/4-portas/2018-2019/58237249" },
    { nome: "AUDI Q3", preco: 379990, link: "https://www.webmotors.com.br/comprar/audi/q3/20-40-tfsi-gasolina-sportback-performance-black-plus-quattro-tiptronic/4-portas/2024-2025/57664673" },
];

const listaCarrosEua = [
    { nome: "TESLA CYBERTRUCK", preco: 72074, link: "https://www.truecar.com/used-cars-for-sale/listing/7G2CEHED8RA047987/2024-tesla-cybertruck/?position=0&returnTo=%2Fused-cars-for-sale%2Flistings%2Ftesla%2Fcybertruck%2F&sourceType=marketplace&sponsored=true" },
    { nome: "FORD MUSTANG", preco: 15900, link: "https://www.truecar.com/used-cars-for-sale/listing/1FA6P8TH6H5256783/2017-ford-mustang/?position=11&returnTo=%2Fused-cars-for-sale%2Flistings%2Fford%2Fmustang%2F&sourceType=marketplace" },
    { nome: "PORSCHE PANAMERA", preco: 36443, link: "https://www.truecar.com/used-cars-for-sale/listing/WP0AA2A73JL106953/2018-porsche-panamera/?position=2&returnTo=%2Fused-cars-for-sale%2Flistings%2Fporsche%2Fpanamera%2F&sourceType=marketplace&sponsored=true" },
    { nome: "LAMBORGHINI HURACAN", preco: 254988, link: "https://www.truecar.com/used-cars-for-sale/listing/ZHWUT4ZF1MLA16309/2021-lamborghini-huracan/?position=9&returnTo=%2Fused-cars-for-sale%2Flistings%2Flamborghini%2F&sourceType=marketplace" },
    { nome: "FERRARI 458 SPIDER", preco: 259829, link: "https://www.truecar.com/used-cars-for-sale/listing/ZFF68NHA4E0201860/2014-ferrari-458-italia/?position=2&returnTo=%2Fused-cars-for-sale%2Flistings%2Fferrari%2F458-italia%2F%3Ftrim%3Dspider&sourceType=marketplace" },
    { nome: "VOLKSWAGEN JETTA", preco: 6999, link: "https://www.truecar.com/used-cars-for-sale/listing/3VWD17AJ0EM406070/2014-volkswagen-jetta/?position=4&returnTo=%2Fused-cars-for-sale%2Flistings%2Fvolkswagen%2Fjetta%2F&sourceType=marketplace" },
    { nome: "RANGE ROVER VELAR", preco: 28459, link: "https://www.truecar.com/used-cars-for-sale/listing/SALYK2EX2LA292143/2020-land-rover-range-rover-velar/?position=8&returnTo=%2Fused-cars-for-sale%2Flistings%2Fland-rover%2Frange-rover-velar%2F%3FexteriorColorGeneric%5B%5D%3DRed&sourceType=marketplace" },
    { nome: "AUDI Q3", preco: 38369, link: "https://www.truecar.com/used-cars-for-sale/listing/WA1EECF30R1180690/2024-audi-q3/?position=11&returnTo=%2Fused-cars-for-sale%2Flistings%2Faudi%2Fq3%2Fyear-2024-max%2F%3Fpage%3D3&sourceType=marketplace" },
];

function iniciar() {
    numeroAleatorio = Math.floor(Math.random() * 8);
    divChute.classList.remove("hide")
    divInicio.classList.add("hide")
    console.log(numeroAleatorio)
    segundaPagina();
}

function segundaPagina() {
    carrosBrasil = listaCarrosBrasil[numeroAleatorio]
    carrosEua = listaCarrosEua[numeroAleatorio]

    resultadoEua2.innerHTML = `
    <div class="titulo-segunda-pagina">
        <p>${carrosEua.nome}</p>
        <img src="../assets/banners/eua.png" class="img-pais">
    </div>
        <img src="../assets/banco_de_carros/eua/${numeroAleatorio}.jpg" class="img-carros">
        `
}

// FALAR NO PROJETO QUE SE O CHUTE FOI MUITO DISTANTE ELE VAI CONSIDERAR COMO 0% DE ASSERTIVIDADE

function chutarPreco() {
    precoChutado = Number(document.getElementById("ipt_preco_chutado").value);
    precoReal = carrosEua.preco;
    erro = Math.abs(precoChutado - precoReal);
    erroPercentual = (erro / precoReal) * 100;
    assertividade = Math.max(0, 100 - erroPercentual).toFixed(2);
    divResultados.classList.remove("hide")
    divChute.classList.add("hide")
    console.log(precoChutado)
    calculoAssertividade();
}

function calculoAssertividade() {
    resultadoDoChute.innerHTML = `
            <h1>Você teve uma assertividade de ${assertividade} % no seu chute!</h1>
        `
    enviarAssertividade()
}

function precoNosEua() {
    resultadoDoChute2.innerHTML = `
            <h1>O carro ${carrosEua.nome} custa em média de $ ${carrosEua.preco.toLocaleString("pt-BR")} nos EUA 💸</h1>
            <h1>E o preço que você chutou foi de $ ${precoChutado.toLocaleString("pt-BR")} ❗</h1>
        `
};

function precoNoBrasil() {
    resultadoDoChute3.innerHTML = `
            <h1>Esse mesmo carro custa em média de ${carrosBrasil.preco.toLocaleString("pt-BR")} no Brasil ❗</h1>
        `
};

function resultadoTempoDeCompra() {
    resultadoDoChute4.innerHTML = `
            <h1>Com uma renda de ${Number.isNaN(salarioEscolhido) ? salarioMinimoBrasil : salarioMinimoEua}💸</h1>
            <h1>Nos Eua você demoraria em média de ${tempoParaComprarEua} anos para comprar esse veículo </h1>
            <h1>No Brasil você demoraria em média de ${tempoParaComprarBrasil} anos para comprar esse veículo </h1>
        `
}

function resultados() {
    divResultados.classList.add("hide")
    divResultados2.classList.remove("hide")
    precoNosEua();
}

function resultados2() {
    divResultados2.classList.add("hide")
    divResultados3.classList.remove("hide")
    precoNoBrasil();
}

function resultados3() {
    divResultados3.classList.add("hide")
    divResultados4.classList.remove("hide")
    calcularTempoDeCompra();
    resultadoTempoDeCompra();
}

function resultados4() {
    divResultados4.classList.add("hide")
    divPrincipal.classList.remove("hide")
    terceiraPagina();
}

function outroCarro() {
    divChute.classList.remove("hide")
    divPrincipal.classList.add("hide")
    segundaPagina();
    iniciar();
}

function calcularTempoDeCompra() {
    salarioMinimoBrasil = 0
    salarioMinimoEua = 0
    salarioEscolhido = Number(ipt_select.value)
    carrosEua = listaCarrosEua[numeroAleatorio]
    carrosBrasil = listaCarrosBrasil[numeroAleatorio]

    console.log(salarioEscolhido)

    if (Number.isNaN(salarioEscolhido)) {
        salarioMinimoBrasil = 1516;
        salarioMinimoEua = 1256;
    }

    else {
        salarioMinimoBrasil = salarioEscolhido;
        salarioMinimoEua = salarioEscolhido;
    }

    tempoParaComprarEua = carrosEua.preco / salarioMinimoEua
    tempoParaComprarBrasil = carrosBrasil.preco / salarioMinimoBrasil

    if (tempoParaComprarBrasil >= 12) {
        tempoParaComprarBrasil = Math.floor(tempoParaComprarBrasil / 12)
    }

    if (tempoParaComprarEua >= 12) {
        tempoParaComprarEua = Math.floor(tempoParaComprarEua / 12)
    }
}


function terceiraPagina() {

    resultadoBrasil.innerHTML = `
        <img src="../assets/banco_de_carros/brasil/${numeroAleatorio}.jpg" alt="lambo" class="img-carros">
        <div class="div-titulo">
            <p class="titulo-carro">${carrosBrasil.nome}</p>
        </div>
        <p class="descricao">Preço do carro R$ ${carrosBrasil.preco.toLocaleString("pt-BR")}</p>
        <p class="descricao">Com uma renda de R$ ${salarioMinimoBrasil.toLocaleString("pt-BR")}</p> 
        <p class="descricao">Serão necessarios ${tempoParaComprarBrasil} anos para comprar esse carro<p>
        <a href="${carrosBrasil.link}" target="_blank">Link</a>
        `

    resultadoEua.innerHTML = `
        <img src="../assets/banco_de_carros/eua/${numeroAleatorio}.jpg" alt="lambo" class="img-carros">
        <div class="div-titulo">
            <p class="titulo-carro">${carrosEua.nome}</p>
        </div>
        <p class="descricao">Preço do carro $ ${carrosEua.preco.toLocaleString("pt-BR")}</p> 
        <p class="descricao">Com uma renda de $ ${salarioMinimoEua.toLocaleString("pt-BR")}</p> 
        <p class="descricao">Serão necessarios ${tempoParaComprarEua} anos para comprar esse carro<p>
        <a href="${carrosEua.link}" target="_blank">Link</a>
        `
}

function sair() {
    window.location = "../index.html"
}

function dash() {
    divDash.classList.remove("hide")
}

function enviarAssertividade() {
    // Agora vá para o método fetch logo abaixo
    var assertividadeVar = assertividade;
    var usuarioVar = sessionStorage.ID_USUARIO


    // Enviando o valor da nova input
    fetch("/dash/resultadosUsuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            assertividadeServer: assertividadeVar,
            usuarioServer: usuarioVar
            
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                setTimeout(() => {
                    console.log("Assertividade", assertividadeVar)
                    console.log("idUsuario", usuarioVar)
                }, "2000");
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;

};

/*Chart JS*/

const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

let proximaAtualizacao;

function chamarGraficos() {
    const idUsuario = sessionStorage.ID_USUARIO;

    graficos.innerHTML = `
        <canvas id="myChartCanvas${idUsuario}"></canvas>
        `
    obterDadosGrafico(idUsuario)
}

function obterDadosGrafico(idUsuario) {

    console.log(idUsuario)

    // if (proximaAtualizacao != undefined) {
    //     clearTimeout(proximaAtualizacao);
    // }

    fetch(`/medidas/ultimas/${sessionStorage.ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta, idUsuario);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
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

    console.log('iniciando plotagem do gráfico...');
    console.log("essa é a respostaaaaaaaaaaaa", resposta[2].assertividade)
    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: '% Assertividade ',
            data: [],
            fill: false,
            backgroundColor: 'rgb(46, 204, 113)',
            borderColor: 'rgb(46, 204, 113)',
            tension: 0.1
        }],
        // {
        //     label: 'Temperatura',
        //     data: [],
        //     fill: false,
        //     borderColor: 'rgb(199, 52, 52)',
        //     tension: 0.1
        // }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(resposta[i].assertividade);
        dados.datasets[0].data.push(resposta[i].assertividade);
        // dados.datasets[1].data.push(registro.temperatura);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
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

function atualizarGrafico(idUsuario, dados, myChart) {

    fetch(`/medidas/tempo-real/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {

                obterdados(idUsuario);
                // alertar(novoRegistro, idUsuario);
                console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                console.log(`Dados atuais do gráfico:`);
                console.log(dados);

                let avisoCaptura = document.getElementById(`avisoCaptura${idUsuario}`)
                avisoCaptura.innerHTML = ""


                if (novoRegistro[0].momento_grafico == dados.labels[dados.labels.length - 1]) {
                    console.log("---------------------------------------------------------------")
                    console.log("Como não há dados novos para captura, o gráfico não atualizará.")
                    avisoCaptura.innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> Foi trazido o dado mais atual capturado pelo sensor. <br> Como não há dados novos a exibir, o gráfico não atualizará."
                    console.log("Horário do novo dado capturado:")
                    console.log(novoRegistro[0].momento_grafico)
                    console.log("Horário do último dado capturado:")
                    console.log(dados.labels[dados.labels.length - 1])
                    console.log("---------------------------------------------------------------")
                } else {
                    // tirando e colocando valores no gráfico
                    dados.labels.shift(); // apagar o primeiro
                    dados.labels.push(novoRegistro[0].momento_grafico); // incluir um novo momento

                    dados.datasets[0].data.shift();  // apagar o primeiro de umidade
                    dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade

                    dados.datasets[1].data.shift();  // apagar o primeiro de temperatura
                    dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura

                    myChart.update();
                }

                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGrafico(idUsuario, dados, myChart), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            proximaAtualizacao = setTimeout(() => atualizarGrafico(idUsuario, dados, myChart), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}

/*Chart JS*/

// const ctx = document.getElementById('myChart');
// const ctx2 = document.getElementById('myChart2');

// new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// new Chart(ctx2, {
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
