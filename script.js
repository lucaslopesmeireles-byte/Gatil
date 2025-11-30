function toggleMenu() {
            const nav = document.getElementById('nav');
            nav.classList.toggle('active');
        }

        function handleSubmit(event) {
            event.preventDefault();
            alert('Obrigado pelo contato! Retornaremos em breve.');
            event.target.reset();
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    const nav = document.getElementById('nav');
                    nav.classList.remove('active');
                }
            });
        });