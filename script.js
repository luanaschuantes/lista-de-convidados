// Lista inicial de convidados
let guests = [
    'Alice', 'Ana', 'Bruno', 'Carlos', 'Daniel', 'Alícia', 
    'Lucas', 'Maria', 'André', 'Amanda', 'Arthur', 'Adriana', 'Ricardo', 'Joaquim'
];

// Função para transformar os nomes em maiúsculas
function toUpperCaseList() {
    const upperCaseList = document.getElementById('upperCaseList');
    upperCaseList.innerHTML = ''; // Limpar lista
    guests.forEach(guest => {
        const li = document.createElement('li');
        li.textContent = guest.toUpperCase(); // Nome em maiúsculas
        upperCaseList.appendChild(li);
    });
}

// Função para contar e listar convidados que começam com a letra 'A'
function startsWithA() {
    const startsWithAList = document.getElementById('startsWithAList');
    startsWithAList.innerHTML = ''; // Limpar lista
    let count = 0;
    guests.forEach(guest => {
        if (guest[0].toUpperCase() === 'A') {
            const li = document.createElement('li');
            li.textContent = guest;
            startsWithAList.appendChild(li);
            count++;
        }
    });
    document.getElementById('countStartsWithA').textContent = count; // Exibir a contagem
}

// Função para listar convidados com mais de 5 letras
function moreThanFiveLetters() {
    const moreThanFiveLettersList = document.getElementById('moreThanFiveLettersList');
    moreThanFiveLettersList.innerHTML = ''; // Limpar lista
    guests.forEach(guest => {
        if (guest.length > 5) {
            const li = document.createElement('li');
            li.textContent = guest;
            moreThanFiveLettersList.appendChild(li);
        }
    });
}

// Função para alternar a visibilidade das seções
function showContent(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.style.display = 'none');

    // Mostra a seção correspondente
    document.getElementById(sectionId).style.display = 'block';
}

// Chamar as funções quando a página carrega
window.onload = function() {
    // Inicializa todas as seções
    toUpperCaseList();
    startsWithA();
    moreThanFiveLetters();

    // Mostra a primeira seção (por exemplo, "Convidados em Maiúsculas")
    showContent('upperCase');
};
