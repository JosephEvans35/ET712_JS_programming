const colors = [
            { name: 'Red', value: '#ff0000' },
            { name: 'Orange', value: '#ffa500' },
            { name: 'Yellow', value: '#ffff00' },
            { name: 'Green', value: '#008000' },
            { name: 'Blue', value: '#0000ff' },
            { name: 'Indigo', value: '#4b0082' },
            { name: 'Violet', value: '#ee82ee' },
            { name: 'Pink', value: '#FFC0CB'},
            { name: 'Brown', value: '#964B00'},
            { name: 'Black', value: '#000000'}
        ];
        const slider = document.getElementById('rainbowSlider');
        const colorName = document.getElementById('colorName');

        slider.addEventListener('input', () => {
            const color = colors[Number(slider.value)];
            document.body.style.backgroundColor = color.value;
            colorName.textContent = color.name;
            slider.setAttribute('aria-valuetext', color.name);
        });
        