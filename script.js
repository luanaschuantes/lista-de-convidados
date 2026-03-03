let guests = ["Ana", "Pedro", "João", "Maria", "Alexandre", "Luana", "André", "Lucas", "Isabela", "Arthur"];

// Atualiza as listas com os convidados
function updateLists() {
    // Limpar as listas
    document.getElementById('guestList').innerHTML = '';
    document.getElementById('aList').innerHTML = '';
    document.getElementById('fiveLetterList').innerHTML = '';

    guests.forEach(guest => {
        // Lista de Convidados
        const li = document.createElement('li');
        li.textContent = guest;
        document.getElementById('guestList').appendChild(li);

        // Lista de Convidados com "A"
        if (guest.charAt(0).toUpperCase() === 'A') {
            const liA = document.createElement('li');
            liA.textContent = guest;
            document.getElementById('aList').appendChild(liA);
        }

        // Lista de Convidados com 5 letras
        if (guest.length === 5) {
            const liFive = document.createElement('li');
            liFive.textContent = guest;
            document.getElementById('fiveLetterList').appendChild(liFive);
        }
    });
}

// Alterna entre as seções de listas
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Adiciona um convidado à lista
function addGuest() {
    const name = prompt("Digite o nome do convidado:");
    if (name) {
        guests.push(name);
        updateLists();
    }
}

// Remove um convidado da lista
function removeGuest() {
    const name = prompt("Digite o nome do convidado a remover:");
    if (name) {
        guests = guests.filter(guest => guest !== name);
        updateLists();
    }
}

// Ordena a lista de convidados
function sortList() {
    guests.sort();
    updateLists();
}

// Filtra os convidados com base no nome
function filterList() {
    const filter = document.getElementById('filterConvidados').value.toLowerCase();
    const filteredGuests = guests.filter(guest => guest.toLowerCase().includes(filter));
    
    const listElement = document.getElementById('guestList');
    listElement.innerHTML = '';
    filteredGuests.forEach(guest => {
        const li = document.createElement('li');
        li.textContent = guest;
        listElement.appendChild(li);
    });
}

// Filtra a lista com "A"
function filterListA() {
    const filter = document.getElementById('filterA').value
