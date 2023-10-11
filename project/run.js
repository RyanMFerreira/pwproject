function AlterarTamanhoMapa() {
    var largura = document.getElementById("larguraInput").value;
    var altura = document.getElementById("alturaInput").value;

    document.querySelector(".InnerPage").style.width = largura + "px";
    document.querySelector(".InnerPage").style.height = altura + "px";

}

function ToggleMapConfigMenu() {
    var menu = document.querySelector('.MapConfigBackground');
    menu.style.width = menu.style.width == '30%' ? '0' : '30%';
}