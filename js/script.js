function responderCorretamente() {
    alert("Ótima escolha! Segurança em primeiro lugar.");
}

function escolherDesafio(desafio) {
    localStorage.setItem("desafioEscolhido", desafio);
    window.location.href = "simulacao.html";
}


document.addEventListener("DOMContentLoaded", function () {
    const articles = [
        {
            title: "O Perigo dos Desafios Virais",
            content: "Desafios virais podem parecer divertidos, mas alguns podem colocar sua vida em risco. Sempre pesquise antes de participar!"
        },
        {
            title: "Por Que Seguimos Tendências?",
            content: "O desejo de aceitação pode nos levar a seguir desafios perigosos. Mas é importante pensar nas consequências antes de agir."
        },
        {
            title: "Como Identificar um Desafio Perigoso?",
            content: "Se envolve dor, riscos à saúde ou perigo real, não vale a pena! Fique atento e priorize sua segurança."
        }
    ];

    const container = document.getElementById("articles-container");

    articles.forEach(article => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
        `;

        container.appendChild(card);
    });
});

const desafios = {
    "pulo-alto": {
        titulo: "🚧 Fratura Grave Após Salto Perigoso",
        descricao: "Após pular de um local alto, você sofreu uma fratura na perna e precisou passar meses em recuperação. Pense antes de agir!",
        imagem: "/assets/img/pulo-alto.jpg",
        efeito: "tremor"
    },
    "desafio-fogo": {
        titulo: "🔥 Queimaduras de Segundo Grau",
        descricao: "Brincar com fogo causou queimaduras graves e cicatrizes permanentes. Nunca subestime os riscos!",
        imagem: "/assets/img/desafio-fogo.jpg",
        efeito: "fogo"
    },
    "desafio-remedio": {
        titulo: "💊 Intoxicação por Medicamentos",
        descricao: "Tomar remédios sem prescrição médica levou a uma intoxicação grave. Você precisou de atendimento emergencial!",
        imagem: "/assets/img/desafio-remedio.jpg",
        efeito: "girar"
    },
    "corrida-ilegal": {
        titulo: "🚗 Acidente Fatal em Corrida Ilegal",
        descricao: "Uma decisão imprudente resultou em um acidente de carro, afetando você e outras pessoas. Escolha sempre a segurança!",
        imagem: "/assets/img/corrida-ilegal.jpg",
        efeito: "batida"
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.getElementById("simulacao-titulo");
    const descricao = document.getElementById("simulacao-descricao");
    const imagem = document.getElementById("simulacao-imagem");

    const desafioEscolhido = localStorage.getItem("desafioEscolhido");
    console.log("Desafio escolhido:", desafioEscolhido);

    if (desafioEscolhido && desafios[desafioEscolhido]) {
        const desafio = desafios[desafioEscolhido];

        console.log("Desafio encontrado:", desafio);

        titulo.textContent = desafio.titulo;
        descricao.textContent = desafio.descricao;
        imagem.src = desafio.imagem;

        // 🔹 Removendo todas as classes antes de adicionar a nova
        imagem.classList.remove("fogo", "girar", "batida", "tremor");
        imagem.classList.add(desafio.efeito);

    } else {
        console.error("Nenhum desafio válido foi encontrado.");
    }
});
