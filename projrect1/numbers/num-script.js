function initializeAnimalCards() {
    const animals = new Set([
        'alligator', 'alpaca', 'ant', 'bear', 'bee', 'bird', 'butterfly',
        'cat', 'chicken', 'cow', 'deer', 'dog', 'dolphin', 'duck', 'eagle',
        'elephant', 'fish', 'fox', 'frog', 'giraffe', 'goat', 'hamster',
        'horse', 'lion', 'lizard', 'monkey', 'mouse', 'owl', 'panda',
        'parrot', 'penguin', 'pig', 'rabbit', 'shark', 'sheep', 'snake',
        'spider', 'tiger', 'turtle', 'whale', 'wolf', 'zebra', 'ladybug', 
        'sloth'
    ]);
    const promptText = 'great counting! which animal is your favorite?';
    const promptElement = [...document.querySelectorAll('body *')].find(element =>
        element.textContent.toLowerCase().includes(promptText) &&
        ![...element.children].some(child => child.textContent.toLowerCase().includes(promptText))
    );

    if (promptElement && !document.querySelector('#favorite-animal-form')) {
        const form = document.createElement('form');
        form.id = 'favorite-animal-form';
        form.style.marginTop = '0.5rem';

        const input = document.createElement('input');
        input.id = 'favorite-animal';
        input.name = 'favoriteAnimal';
        input.type = 'text';
        input.placeholder = 'Enter an animal';
        input.setAttribute('aria-label', 'Your favorite animal');
        input.required = true;

        const button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'Submit';

        form.append(input, button);
        promptElement.insertAdjacentElement('afterend', form);
        form.addEventListener('submit', event => {
            event.preventDefault();
            if (animals.has(input.value.trim().toLowerCase())) {
                window.alert('That is a cool animal!!! 😊');
            } else {
                window.alert('Error: please enter an animal.');
            }
        });
    }

    const cards = [...document.querySelectorAll(
        '#number-cards article, #numbers article, #animal-cards article'
    )];
    if (!cards.length) return;

    const originalDisplays = cards.map(card => getComputedStyle(card).display);
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, cardIndex) => {
            card.hidden = cardIndex !== index;
            card.style.display = card.hidden ? 'none' : originalDisplays[cardIndex];
        });
        currentIndex = index;
    }

    function advanceCard() {
        showCard((currentIndex + 1) % Math.min(cards.length, 10));
    }

    cards.forEach(card => {
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.style.cursor = 'pointer';
        card.addEventListener('click', advanceCard);
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                advanceCard();
            }
        });
    });

    showCard(0);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnimalCards);
} else {
    initializeAnimalCards();
}

