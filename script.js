const btn = document.querySelector("#btn");
const reset = document.querySelector("#reset");
const papel = document.querySelector("#papel");
const pedra = document.querySelector("#pedra");
const tesoura = document.querySelector("#tesoura");
const pc = document.querySelector("#pc");
const placar = document.querySelector("#placar");
let vit = 0;
let emp = 0;
let der = 0;


btn.addEventListener("click", jogar);
reset.addEventListener("click", resetar);

function jogar() {
    //Não recarrega a página ao clicar no jogar.
    event.preventDefault();


    if (papel == false && pedra.checked == false && tesoura.checked == false) {
        alert("Escolha uma opção.");
    } else {
        //Lógica do computador
        var sorteio = Math.floor(Math.random() * 3);


        switch (sorteio) {
            case 0:
                pc.src = "./assets/pcpedra.png";
                break;
            case 1:
                pc.src = "./assets/pcpapel.png";
                break;
            case 2:
                pc.src = "./assets/pctesoura.png";
                break;
        }
        if ((papel.checked == true && sorteio == 1) || (pedra.checked == true && sorteio == 0) || (tesoura.checked == true && sorteio == 2)) {
            placar.style.color = "black";
            placar.innerHTML = "EMPATE!";
            emp++;
            document.querySelector("#empate").innerHTML = `Empate = ${emp}`;
        } else if ((papel.checked == true && sorteio == 0) || (pedra.checked == true && sorteio == 2) || (tesoura.checked == true && sorteio == 0)) {
            placar.style.color = "green";
            placar.innerHTML = "JOGADOR VENCEU!";
            acertou();
            vit += 1;
            document.querySelector("#vitoria").innerHTML = `Vitória = ${vit}`;
        } else {
            placar.style.color = "red";
            placar.innerHTML = "COMPUTADOR VENCEU!";
            errou();
            der += 1;;
            document.querySelector("#derrota").innerHTML = `Derrota = ${der}`;
        }
    }
}
function resetar() {
    pc.src = "./assets/pc.png";
    placar.innerHTML = '';
}
function acertou() {
    var audio = new Audio;
    audio.src = "./assets/acertou.mp3";
    audio.play();
}
function errou() {
    var audio = new Audio;
    audio.src = "./assets/errou.mp3";
    audio.play();
}