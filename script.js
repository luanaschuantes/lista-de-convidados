let guests = ["Ana", "Pedro", "João", "Maria", "Alexandre", "Luana", "André", "Lucas", "Isabela", "Arthur"];

function toggleSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Exibe a seção clicada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

function processGuestList() {
    let countA = 0;
    let countFiveLetters = 0;
    let uppercaseList = [];

    guests.forEach(guest => {
        if (guest.charAt(0).toUpperCase() === 'A') {
            countA++;
        }
        if (guest.length === 5) {
            countFiveLetters++;
        }
        uppercaseList.push(guest.toUpperCase());
    });

    document.getElementById('countA').textContent = countA;
    document.getElementById('countFiveLetters').textContent = countFiveLetters;

    const uppercaseListElement = document.getElementById('uppercaseList');
    uppercaseListElement.innerHTML = '';
    uppercaseList.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        uppercaseListElement.appendChild(listItem);
    });
}

function addGuest() {
    const guestName = prompt("Digite o nome do convidado:");
    if (guestName) {
        guests.push(guestName);
        updateGuestList();
    }
}

function removeGuest() {
    const guestName = prompt("Digite o nome do convidado a remover:");
    if (guestName) {
        guests = guests.filter(guest => guest !== guestName);
        updateGuestList();
    }
}

function updateGuestList() {
    const guestListElement = document.getElementById('guestList');
    guestListElement.innerHTML = '';
    guests.forEach(guest => {
        const listItem = document.createElement('li');
        listItem.textContent = guest;
        guestListElement.appendChild(listItem);
    });
}

function filterList() {
    const filter = document.getElementById('filterName').value.toLowerCase();
    const filteredGuests = guests.filter(guest => guest.toLowerCase().includes(filter));
    
    const guestListElement = document.getElementById('guestList');
    guestListElement.innerHTML = '';
    filteredGuests.forEach(guest => {
        const listItem = document.createElement('li');
        listItem.textContent = guest;
        guestListElement.appendChild(listItem);
    });
}

function sortList() {
    guests.sort();
    updateGuestList();
}
