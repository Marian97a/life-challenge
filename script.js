function responderCorretamente() {
    alert("Ótima escolha! Segurança em primeiro lugar.");
}

function redirecionarParaSimulacao() {
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
