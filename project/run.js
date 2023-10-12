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

function AdicionarNovoObjeto() {
    var NovoObjeto = document.createElement("div");
    NovoObjeto.className = "NovoObjeto";
    NovoObjeto.textContent = "Objeto " + (document.querySelectorAll('.NovoObjeto').length + 1);

    var ObjetosExistentes = document.querySelectorAll('.NovoObjeto');
    if (ObjetosExistentes.length > 0) {
        var UltimoObjeto = ObjetosExistentes[ObjetosExistentes
            .length - 1];
        NovoObjeto.style.left = (UltimoObjeto.offsetLeft + UltimoObjeto.offsetWidth + 48) + "px";
    } else {
        NovoObjeto.style.left = "15px";
    }

    document.querySelector('.CodingArea').appendChild(NovoObjeto);

    var BotaoAdicionarBloco = document.createElement("button");
    BotaoAdicionarBloco.textContent = "Adicionar Bloco";
    BotaoAdicionarBloco.className = "AdicionarBlocoButton";
    BotaoAdicionarBloco.onclick = AdicionarBloco; 

    NovoObjeto.appendChild(BotaoAdicionarBloco);
}



function AdicionarBloco() {
    var NovoBloco = document.createElement("div");
    NovoBloco.className = "NovoBloco";
    NovoBloco.textContent = "Novo Bloco";

    document.querySelector('.NovoObjeto').appendChild(NovoBloco);
}

