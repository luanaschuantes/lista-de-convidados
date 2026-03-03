let guests = ["Ana", "Pedro", "João", "Maria", "Alexandre", "Luana", "André", "Lucas", "Isabela", "Arthur"];
let aGuests = [];
let fiveLetterGuests = [];

function updateLists() {
    // Atualiza as listas
    document.getElementById('guestList').innerHTML = '';
    document.getElementById('aList').innerHTML = '';
    document.getElementById('fiveLetterList').innerHTML = '';

    guests.forEach(guest => {
        const li = document.createElement('li');
        li.textContent = guest;
        document.getElementById('guestList').appendChild(li);
        
        // Atualiza lista com convidados que começam com "A"
        if (guest.charAt(0).toUpperCase() === 'A') {
            const liA = document.createElement('li');
            liA.textContent = guest;
            document.getElementById('aList').appendChild(liA);
        }
        
        // Atualiza lista com convidados de 5 letras
        if (guest.length === 5) {
            const liFive = document.createElement('li');
            liFive.textContent = guest;
            document.getElementById('fiveLetterList').appendChild(liFive);
        }
    });
}

function toggleSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    
    // Exibe a seção selecionada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

function addGuest(listId) {
    const name = prompt("Digite o nome do convidado:");
    if (name) {
        guests.push(name);
        updateLists();
    }
}

function removeGuest(listId) {
    const name = prompt("Digite o nome do convidado a remover:");
    guests = guests.filter(guest => guest !== name);
    updateLists();
}

function sortList(listId) {
    guests.sort();
    updateLists();
}

function filterList(listId) {
    const filter = document.getElementById('filter' + listId).value.toLowerCase();
    const filteredGuests = guests.filter(guest => guest.toLowerCase().includes(filter));
    
