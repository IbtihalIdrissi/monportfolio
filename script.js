document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            // Si la page cible est déjà active, on ne fait rien
            if (link.classList.contains('active')) return;

            // Mise à jour des liens de navigation
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');

            // Phase 1 : Animation de sortie (fade out) de la page active
            const activePage = document.querySelector('.page.active');
            
            if (activePage) {
                activePage.classList.remove('active');
                activePage.classList.add('fade-out');
                
                // Attendre la fin de l'animation de sortie (400ms selon le CSS)
                setTimeout(() => {
                    activePage.classList.remove('fade-out');
                    // Phase 2 : Animation d'entrée de la nouvelle page
                    pages.forEach(page => page.classList.remove('active'));
                    const targetPage = document.getElementById(targetId);
                    targetPage.classList.add('active');
                }, 400);
            } else {
                // Cas de repli (si pas de page active trouvée)
                const targetPage = document.getElementById(targetId);
                targetPage.classList.add('active');
            }
        });
    });
});
