function processGuestList() {
    const guests = ["Ana", "Pedro", "João", "Maria", "Alexandre", "Luana", "André", "Lucas", "Isabela", "Arthur"];
    let countA = 0;
    let countFiveLetters = 0;
    let uppercaseList = [];

    guests.forEach(guest => {
        // Contagem de nomes que começam com "A"
        if (guest.charAt(0).toUpperCase() === 'A') {
            countA++;
        }

        // Contagem de nomes com 5 letras
        if (guest.length === 5) {
            countFiveLetters++;
        }

        // Adicionar nome em maiúsculo à lista
        uppercaseList.push(guest.toUpperCase());
    });

    // Exibir resultados
    document.getElementById('countA').textContent = countA;
    document.getElementById('countFiveLetters').textContent = countFiveLetters;

    // Exibir lista de nomes em maiúsculo
    const uppercaseListElement = document.getElementById('uppercaseList');
    uppercaseListElement.innerHTML = '';
    uppercaseList.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        uppercaseListElement.appendChild(listItem);
    });
}
