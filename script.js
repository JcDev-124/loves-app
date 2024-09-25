document.getElementById('buttonNao').addEventListener('click', function() {
    // Obter a largura e altura da janela
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Obter as dimensões e a posição do botão "Sim"
    const buttonSim = document.getElementById('buttonSim');
    const buttonSimRect = buttonSim.getBoundingClientRect();

    // Obter a largura e altura do botão "Não"
    const buttonNaoWidth = this.offsetWidth;
    const buttonNaoHeight = this.offsetHeight;

    // Gerar posições aleatórias para o botão "Não", garantindo que não sobreponha o botão "Sim"
    let randomXNao, randomYNao;
    do {
        randomXNao = Math.random() * (windowWidth - buttonNaoWidth);
        randomYNao = Math.random() * (windowHeight - buttonNaoHeight);
    } while (isOverlap(buttonSimRect, randomXNao, randomYNao, buttonNaoWidth, buttonNaoHeight));

    // Definir a nova posição do botão "Não"
    this.style.position = 'absolute';
    this.style.left = randomXNao + 'px';
    this.style.top = randomYNao + 'px';
});

document.getElementById('buttonSim').addEventListener('click', function() {
    // Redirecionar para o link do WhatsApp
    window.location.href = 'https://api.whatsapp.com/send?phone=35998372360&text=Ola, quero.';
});

// Função para verificar sobreposição de retângulos
function isOverlap(rect, x, y, width, height) {
    return (x < rect.right && x + width > rect.left &&
            y < rect.bottom && y + height > rect.top);
}
