let historia = document.getElementById("historia");
let escolhas = document.getElementById("escolhas");

let cenas = {
    inicio: {
        texto: "Você acorda em uma floresta escura. O que você faz?",
        opcoes: [
            { texto: "Explorar a floresta", acao: "explorar" },
            { texto: "Ficar parado e esperar", acao: "esperar" }
        ]
    },
    explorar: {
        texto: "Você encontra um caminho à frente. Você vai seguir?",
        opcoes: [
            { texto: "Seguir pelo caminho", acao: "caminho" },
            { texto: "Voltar para a floresta", acao: "floresta" }
        ]
    },
    esperar: {
        texto: "Você espera por um tempo, mas nada acontece. O que você faz?",
        opcoes: [
            { texto: "Tentar gritar por ajuda", acao: "gritar" },
            { texto: "Explorar a floresta", acao: "explorar" }
        ]
    }
};

function mostrarCena(cena) {
    historia.innerHTML = cenas[cena].texto;
    escolhas.innerHTML = '';
    cenas[cena].opcoes.forEach(opcao => {
        let botao = document.createElement("button");
        botao.textContent = opcao.texto;
        botao.onclick = function() { mostrarCena(opcao.acao); };
        escolhas.appendChild(botao);
    });
}

// Inicia a aventura
mostrarCena("inicio");

