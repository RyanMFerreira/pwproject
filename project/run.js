function AlterarTamanhoMapa() {
    var largura = document.getElementById("larguraInput").value;
    var altura = document.getElementById("alturaInput").value;

    document.querySelector(".InnerPage").style.width = largura + "px";
    document.querySelector(".InnerPage").style.height = altura + "px";
}

function ToggleMapConfigMenu() {
    var menu = document.querySelector('.MapConfigBackground');
    menu.style.width = menu.style.width === '30%' ? '0' : '30%';
}

function AdicionarNovoObjeto() {
    console.log("Adicionar Novo Objeto");
    var NewObject = document.createElement("Div");
    NewObject.className = "NewObject";

    var NumeroObjeto = document.querySelectorAll('.NewObject').length;
    NewObject.textContent = "Objeto " + NumeroObjeto;

    var ObjetosExistentes = document.querySelectorAll('.NewObject');
    if (ObjetosExistentes.length > 0) {
        var UltimoObjeto = ObjetosExistentes[ObjetosExistentes.length - 1];
        NewObject.style.left = (UltimoObjeto.offsetLeft + UltimoObjeto.offsetWidth + 64) + "px";
    } else {
        NewObject.style.left = "2%";
    }

    var BotaoAdicionarBloco = document.createElement("button");
    BotaoAdicionarBloco.textContent = "Adicionar Bloco";
    BotaoAdicionarBloco.className = "AdicionarBlocoButton";
    BotaoAdicionarBloco.onclick = function () {
        AdicionarBloco(NewObject);
    };
    NewObject.appendChild(BotaoAdicionarBloco);

    document.querySelector('.CodingArea').appendChild(NewObject);
}

function AdicionarBloco(objeto) {

    console.log("Adicionar Novo Bloco");
    var NovoBloco = document.createElement("button");
    NovoBloco.className = "NovoBloco";

    var numeroBloco = objeto.querySelectorAll('.NovoBloco').length;
    NovoBloco.textContent = "Bloco " + numeroBloco;

    var blocosExistentes = objeto.querySelectorAll('.NovoBloco');
    for (var i = 0; i < blocosExistentes.length; i++) {
        blocosExistentes[i].style.borderBottomRightRadius = "0";
    }

    if (objeto.querySelectorAll('.NovoBloco').length === 0) {
        NovoBloco.style.borderTopRightRadius = "16px";
        NovoBloco.style.borderTopLeftRadius = "16px";
        NovoBloco.style.marginTop = "60px";
        NovoBloco.style.borderBottomRightRadius = "16px";
    } else {
        NovoBloco.style.borderBottomRightRadius = "16px";
    }

    objeto.insertBefore(NovoBloco, objeto.querySelector('.AdicionarBlocoButton'));
}
