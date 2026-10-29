 document.querySelectorAll('.animal-card').forEach((card) => {
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');

            const sendAnimalAcrossPage = () => {
                const animal = document.createElement('span');
                animal.textContent = card.querySelector('.card-top').textContent;
                animal.setAttribute('aria-hidden', 'true');
                animal.style.cssText = 'position:fixed;z-index:9999;pointer-events:none;font-size:3.5rem;line-height:1;';

                const bounds = card.getBoundingClientRect();
                const startX = bounds.left + bounds.width / 2;
                const startY = bounds.top + bounds.height / 2;
                const direction = startX < window.innerWidth / 2 ? 1 : -1;
                const distance = direction === 1
                    ? window.innerWidth + 100 - startX
                    : -100 - startX;

                animal.style.left = `${startX}px`;
                animal.style.top = `${startY}px`;
                document.body.appendChild(animal);

                const animation = animal.animate([
                    { transform: 'translate(-50%, -50%) rotate(0deg)' },
                    { transform: `translate(calc(-50% + ${distance * 0.3}px), calc(-50% - 55px)) rotate(${direction * 20}deg)`, offset: 0.3 },
                    { transform: `translate(calc(-50% + ${distance * 0.7}px), calc(-50% + 15px)) rotate(${direction * 250}deg)`, offset: 0.7 },
                    { transform: `translate(calc(-50% + ${distance}px), calc(-50% - 25px)) rotate(${direction * 540}deg)` }
                ], { duration: 1500, easing: 'ease-in-out' });
                animation.onfinish = () => animal.remove();
            };

            const move = () => {
                card.classList.remove('animal-moving');
                void card.offsetWidth;
                card.classList.add('animal-moving');
                sendAnimalAcrossPage();
            };

            card.addEventListener('click', move);
            card.addEventListener('animationend', () => {
                card.classList.remove('animal-moving');
            });
            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    move();
                }
            });
        });

         // Play a short, synthesized sound for the animal card that is clicked.
        const animalSounds = {
            "Red Fox": [520, 760, 430],
            "Bottlenose Dolphin": [1100, 1500, 900],
            "Sea Turtle": [180, 260, 160],
            "Snowy Owl": [360, 300, 240],
            "Octopus": [240, 520, 200],
            "Giraffe": [420, 540, 380],
            "Emperor Penguin": [620, 480, 700],
            "African Elephant": [190, 330, 150],
            "Honey Bee": [210, 280, 220],
            "Three-toed Sloth": [260, 200, 300]
        };
        let animalAudio;

        document.querySelectorAll(".animal-card").forEach(card => {
            card.addEventListener("click", () => {
                const title = card.querySelector("h2").textContent;
                const frequencies = animalSounds[title];
                if (!frequencies) return;

                animalAudio ??= new (window.AudioContext || window.webkitAudioContext)();
                if (animalAudio.state === "suspended") animalAudio.resume();

                frequencies.forEach((frequency, index) => {
                    const start = animalAudio.currentTime + index * 0.13;
                    const oscillator = animalAudio.createOscillator();
                    const volume = animalAudio.createGain();
                    oscillator.type = title === "Honey Bee" ? "sawtooth" : "sine";
                    oscillator.frequency.setValueAtTime(frequency, start);
                    oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.8, start + 0.11);
                    volume.gain.setValueAtTime(0.0001, start);
                    volume.gain.exponentialRampToValueAtTime(0.12, start + 0.02);
                    volume.gain.exponentialRampToValueAtTime(0.0001, start + 0.12);
                    oscillator.connect(volume);
                    volume.connect(animalAudio.destination);
                    oscillator.start(start);
                    oscillator.stop(start + 0.13);
                });
            });
        });
