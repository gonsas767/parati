// Página inicial
function goToPage2() {
    window.location.href = "page2.html";
}

// Corações flutuantes gerais
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    if (!heartsContainer) return;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('span');
        heart.innerText = "❤️"; // coração Unicode
        heart.style.position = "absolute";
        heart.style.fontSize = 15 + Math.random() * 15 + "px"; // tamanho aleatório
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.opacity = 0.8;
        heart.style.transition = "transform 0.2s";
        heartsContainer.appendChild(heart);

        // animação de subida
        const duration = 5 + Math.random() * 5;
        heart.animate([
            { transform: "translateY(0px)" },
            { transform: "translateY(-100vh)" }
        ], {
            duration: duration * 1000,
            iterations: Infinity
        });
    }
}

// Lanternas
function createLanterns() {
    const container = document.querySelector('.lanterns');
    if (!container) return;

    for (let i = 0; i < 10; i++) {
        const lantern = document.createElement('div');
        lantern.classList.add('lantern');
        lantern.style.left = Math.random() * 100 + 'vw';
        lantern.style.animationDuration = 10 + Math.random() * 10 + 's';
        lantern.style.width = 30 + Math.random() * 30 + 'px';
        lantern.style.height = 40 + Math.random() * 40 + 'px';
        container.appendChild(lantern);
    }
}

// Inicialização
window.onload = () => {
    createHearts('.hearts', 20);           // Corações gerais
    createLanterns();                      // Lanternas flutuantes
    floatingHeartsAroundCharacters();      // Corações ao redor do pinguim e raposa
};
function createLanterns() {
    const container = document.querySelector('.lantern-container');
    if (!container) return;

    for (let i = 0; i < 20; i++) {       // número de lanternas
        const lantern = document.createElement('div');
        lantern.classList.add('lantern');
        lantern.style.left = Math.random() * 100 + "vw";
        lantern.style.bottom = "-60px";
        lantern.style.animationDuration = (10 + Math.random() * 10) + "s";
        container.appendChild(lantern);
    }
}

createLanterns();