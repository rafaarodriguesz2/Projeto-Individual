function converter() {
    let numeroAleatorio = Math.floor(Math.random() * 8);
    let salarioMinimoBrasil = 1516;
    let salarioMinimoEua = 1256;

    const listaCarrosBrasil = [
        {nome: "TESLA CYBERTRUCK", preco: 1799900, link: "https://www.webmotors.com.br/comprar/tesla/cybertruck/1224-kw-eletrico-awd/4-portas/2024/57267695"},
        {nome: "FORD MUSTANG", preco: 419900, link: "https://www.webmotors.com.br/comprar/ford/mustang/50-v8-ti-vct-gasolina-black-shadow-selectshift/2-portas/2020/58116933"},
        {nome: "PORSCHE PANAMERA", preco: 599990, link: "https://www.webmotors.com.br/comprar/porsche/panamera/29-v6-e-hybrid-4s-pdk/4-portas/2020-2021/58408551"},
        {nome: "LAMBORGHINI HURACÁN", preco: 4199900, link: "https://www.webmotors.com.br/comprar/lamborghini/huracan/52-v10-gasolina-lp-640-4-performante-ldf/2-portas/2019/58057208"},
        {nome: "FERRARI 458 SPIDER", preco: 3099990, link: "https://www.webmotors.com.br/comprar/ferrari/458-spider/45-v8-gasolina-f1-dct/2-portas/2014-2015/56411366"},
        {nome: "VOLKSWAGEN JETTA", preco: 78900, link: "https://www.webmotors.com.br/comprar/volkswagen/jetta/20-tsi-highline-211cv-gasolina-4p-tiptronic/4-portas/2014/54125409"},
        {nome: "LAND ROVER RANGE ROVER VELAR", preco: 319000, link: "https://www.webmotors.com.br/comprar/land-rover/range-rover-velar/20-p300-gasolina-r-dynamic-se-automatico/4-portas/2018-2019/58237249"},
        {nome: "AUDI Q3", preco: 379990, link: "https://www.webmotors.com.br/comprar/audi/q3/20-40-tfsi-gasolina-sportback-performance-black-plus-quattro-tiptronic/4-portas/2024-2025/57664673"},
    ];

    const listaCarrosEua = [
        {nome: "TESLA CYBERTRUCK", preco: 72074, link: "https://www.truecar.com/used-cars-for-sale/listing/7G2CEHED8RA047987/2024-tesla-cybertruck/?position=0&returnTo=%2Fused-cars-for-sale%2Flistings%2Ftesla%2Fcybertruck%2F&sourceType=marketplace&sponsored=true"},
        {nome: "FORD MUSTANG", preco: 15900, link: "https://www.truecar.com/used-cars-for-sale/listing/1FA6P8TH6H5256783/2017-ford-mustang/?position=11&returnTo=%2Fused-cars-for-sale%2Flistings%2Fford%2Fmustang%2F&sourceType=marketplace"},
        {nome: "PORSCHE PANAMERA", preco: 36443, link: "https://www.truecar.com/used-cars-for-sale/listing/WP0AA2A73JL106953/2018-porsche-panamera/?position=2&returnTo=%2Fused-cars-for-sale%2Flistings%2Fporsche%2Fpanamera%2F&sourceType=marketplace&sponsored=true"},
        {nome: "LAMBORGHINI HURACÁN", preco: 254988, link: "https://www.truecar.com/used-cars-for-sale/listing/ZHWUT4ZF1MLA16309/2021-lamborghini-huracan/?position=9&returnTo=%2Fused-cars-for-sale%2Flistings%2Flamborghini%2F&sourceType=marketplace"},
        {nome: "FERRARI 458 SPIDER", preco: 259829, link: "https://www.truecar.com/used-cars-for-sale/listing/ZFF68NHA4E0201860/2014-ferrari-458-italia/?position=2&returnTo=%2Fused-cars-for-sale%2Flistings%2Fferrari%2F458-italia%2F%3Ftrim%3Dspider&sourceType=marketplace"},
        {nome: "VOLKSWAGEN JETTA", preco: 6999, link: "https://www.truecar.com/used-cars-for-sale/listing/3VWD17AJ0EM406070/2014-volkswagen-jetta/?position=4&returnTo=%2Fused-cars-for-sale%2Flistings%2Fvolkswagen%2Fjetta%2F&sourceType=marketplace"},
        {nome: "LAND ROVER RANGE ROVER VELAR", preco: 28459, link: "https://www.truecar.com/used-cars-for-sale/listing/SALYK2EX2LA292143/2020-land-rover-range-rover-velar/?position=8&returnTo=%2Fused-cars-for-sale%2Flistings%2Fland-rover%2Frange-rover-velar%2F%3FexteriorColorGeneric%5B%5D%3DRed&sourceType=marketplace"},
        {nome: "AUDI Q3", preco: 38369, link: "https://www.truecar.com/used-cars-for-sale/listing/WA1EECF30R1180690/2024-audi-q3/?position=11&returnTo=%2Fused-cars-for-sale%2Flistings%2Faudi%2Fq3%2Fyear-2024-max%2F%3Fpage%3D3&sourceType=marketplace"},
    ];

    carrosBrasil = listaCarrosBrasil[numeroAleatorio]
    carrosEua = listaCarrosEua[numeroAleatorio]

    let tempoParaComprarBrasil = carrosBrasil.preco / salarioMinimoBrasil 
    let tempoParaComprarEua =  carrosEua.preco / salarioMinimoEua

    if(tempoParaComprarBrasil >= 12){
        tempoParaComprarBrasil = Math.floor(tempoParaComprarBrasil / 12) 
    }

    if(tempoParaComprarEua >= 12){
        tempoParaComprarEua = Math.floor(tempoParaComprarEua / 12) 
    }

    console.log(numeroAleatorio)

    resultadoBrasil.innerHTML = `
    <img src="../assets/banco_de_carros/brasil/${numeroAleatorio}.jpg" alt="lambo" class="img-carros">
    <p>Nome: ${carrosBrasil.nome}</p>
    <p>Preço do carro R$ ${carrosBrasil.preco.toLocaleString("pt-BR")}</p> <br>
    <p>Com uma renda de ${salarioMinimoBrasil.toLocaleString("pt-BR")}</p> <br>
    <p>Serão necessarios ${tempoParaComprarBrasil} anos para comprar esse carro<p>
    <a href="${carrosBrasil.link}" target="_blank">Link</a>
    `

    resultadoEua.innerHTML = `
    <img src="../assets/banco_de_carros/eua/${numeroAleatorio}.jpg" alt="lambo" class="img-carros">
    <p>Nome: ${carrosEua.nome}</p>
    <p>Preço do carro $ ${carrosEua.preco.toLocaleString("pt-BR")}</p> <br>
    <p>Com uma renda de ${salarioMinimoEua.toLocaleString("pt-BR")}</p> <br>
    <p>Serão necessarios ${tempoParaComprarEua} anos para comprar esse carro<p>
    <a href="${carrosEua.link}" target="_blank">Link</a>
    `
}

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