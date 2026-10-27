
        document.addEventListener('DOMContentLoaded', () => {
            const screen = document.querySelector('.loading-screen');
            const loadingText = document.querySelector('.loading-text');
            const hint = document.querySelector('.hint');
            const progressBar = document.querySelector('.progress-bar');
            const progressLabel = document.querySelector('.progress-label');
            const duration = 10000;
            const start = performance.now();

            function updateLoading(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const percent = Math.round(progress * 100);

                progressBar.style.width = `${percent}%`;
                progressLabel.textContent = `${percent}%`;

                if (progress < 1) {
                    requestAnimationFrame(updateLoading);
                } else {
                    screen.classList.add('loaded');
                    loadingText.textContent = 'Ready to learn!';
                    hint.textContent = 'Your adventure is all set to begin.';
                    progressLabel.textContent = '100%';
                }
            }

            requestAnimationFrame(updateLoading);
        });