 const shapes = [
            { name: 'Circle', symbol: '●', color: '#ef6c67' },
            { name: 'Square', symbol: '■', color: '#5c9ce6' },
            { name: 'Triangle', symbol: '▲', color: '#f3ad42' },
            { name: 'Rectangle', symbol: '▰', color: '#8e72c8' },
            { name: 'Oval', symbol: '⬭', color: '#e77da8' },
            { name: 'Diamond', symbol: '◆', color: '#48a889' },
            { name: 'Star', symbol: '★', color: '#d3a900' },
            { name: 'Heart', symbol: '♥', color: '#ed7790' },
            { name: 'Pentagon', symbol: '⬟', color: '#55aeb7' },
            { name: 'Hexagon', symbol: '⬢', color: '#7d9d59' }
        ];
        const field = document.getElementById('shape-field');
        const targetArt = document.getElementById('target-art');
        const targetName = document.getElementById('target-name');
        const status = document.getElementById('game-status');
        let target;
        let roundWon = false;

        function newRound() {
            roundWon = false;
            field.replaceChildren();
            target = shapes[Math.floor(Math.random() * shapes.length)];
            targetArt.textContent = target.symbol;
            targetArt.style.color = target.color;
            targetName.textContent = target.name;
            status.textContent = 'Find the matching shape!';

            const choices = [target];
            while (choices.length < 20) choices.push(shapes[Math.floor(Math.random() * shapes.length)]);
            choices.sort(() => Math.random() - 0.5).forEach(shape => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'moving-shape';
                button.textContent = shape.symbol;
                button.setAttribute('aria-label', shape.name);
                button.style.color = shape.color;
                button.style.left = (2 + Math.random() * 88) + '%';
                button.style.top = (3 + Math.random() * 78) + '%';
                button.style.setProperty('--speed', (2.5 + Math.random() * 3) + 's');
                button.style.setProperty('--delay', (-Math.random() * 4) + 's');
                button.addEventListener('click', () => {
                    if (roundWon) return;
                    if (shape === target) {
                        roundWon = true;
                        button.classList.add('found');
                        status.textContent = 'You found the ' + target.name + '! Great searching!';
                    } else {
                        status.textContent = 'Not that one—keep looking for the ' + target.name + '!';
                    }
                });
                field.append(button);
            });
        }
        document.getElementById('new-round').addEventListener('click', newRound);
        newRound();