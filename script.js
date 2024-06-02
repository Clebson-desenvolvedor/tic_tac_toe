$(document).ready(() => {
    $("#start").click(iniciarJogo);

    $(".block").click((e) => {
        let bloco_atual = $(e.target);
        validarJogada(bloco_atual);
    });

    $("#jogador-atual").text(jogadorAtual);
});

let jogadorX = "X";
let jogadorO = "O";
let jogadorAtual = jogadorX;

let matriz = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function iniciarJogo() {
    limparTela();
    jogadorAtual = jogadorX;

    $("#jogador-atual").text(jogadorAtual);
}

function limparTela() {
    $(".block").empty();
    matriz = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
}

function validarJogada(bloco) {
    if (bloco.text().length > 0) {
        alert("Bloco já preenchido");
    } else {
        preencherBloco(bloco);
        verificaVencedor();
    }
}

function preencherBloco(bloco) {
    let col = bloco.attr("col");
    let row = bloco.attr("row");
    
    bloco.text(jogadorAtual);
    matriz[row][col] = jogadorAtual;
}

function verificaVencedor() {
    matriz.forEach((row) => {
        /* Valida horizontalmente */
        if ((row[0] == row[1] && row[0] == row[2] && row[1] == row[2]) && (row[0] != "" && row[1] != "" && row[2] != "")) {
            alert("Jogador " + jogadorAtual + " venceu. ");
        }
    });

    /* Valida verticalmente */
    if (
        (matriz[0][0] == matriz[1][0] && matriz[0][0] == matriz[2][0] && matriz[1][0] == matriz[2][0]) &&
        (matriz[0][0] != "" && matriz[1][0] != "" && matriz[2][0] != "") ||
        (matriz[0][1] == matriz[1][1] && matriz[0][1] == matriz[2][1] && matriz[1][1] == matriz[2][1]) &&
        (matriz[0][1] != "" && matriz[1][1] != "" && matriz[2][1] != "") ||
        (matriz[0][2] == matriz[1][2] && matriz[0][2] == matriz[2][2] && matriz[1][2] == matriz[2][2]) &&
        (matriz[0][2] != "" && matriz[1][2] != "" && matriz[2][2] != "")
    ) {
        alert("Jogador " + jogadorAtual + " venceu. ");
    } else if (
        (matriz[0][0] == matriz[1][1] && matriz[0][0] == matriz[2][2] && matriz[1][1] == matriz[2][2]) &&
        (matriz[0][0] != "" && matriz[1][1] != "" && matriz[2][2] != "") ||
        (matriz[0][2] == matriz[1][1] && matriz[0][2] == matriz[2][0] && matriz[1][1] == matriz[2][0]) &&
        (matriz[0][2] != "" && matriz[1][1] != "" && matriz[2][0] != "")
    ) {
        alert("Jogador " + jogadorAtual + " venceu. ");
    } else {
        trocarJogador();
    }

}

function trocarJogador() {
    jogadorAtual = jogadorAtual == "X" ? jogadorO : jogadorX;
    $("#jogador-atual").text(jogadorAtual);
}