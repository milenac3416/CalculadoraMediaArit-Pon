
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let botao = document.querySelector("#btnCalcular");

let re1 = document.querySelector("#re1");
let re2 = document.querySelector("#re2");
let re3 = document.querySelector("#re3");
let re4 = document.querySelector("#re4");

  function Calcular () {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let n3 = Number(num3.value);

    let mediaAri = (n1 + n2 + n3) / 3;
    let mediaPon = (n1 * 3 + n2 * 2 + n3 * 5) / 10;
    let soma = mediaAri + mediaPon;
    let mediaMedia = soma / 2;

    re1.textContent = mediaAri;
    re2.textContent = mediaPon;
    re3.textContent = soma;
    re4.textContent = mediaMedia;
}
botao.onclick = function(){
    Calcular ();
}
