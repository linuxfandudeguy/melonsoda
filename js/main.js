const appDiv = document.getElementById('app');
const navDiv = document.getElementById('nav');

// Build nav from Pages array without innerHTML
function buildNav() {
    navDiv.textContent = ''; // Clear previous content

    window.Pages.forEach(page => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = page.title;
        link.dataset.target = page.id;

        link.addEventListener('click', e => {
            e.preventDefault();
            renderPage(page.id);
        });

        navDiv.appendChild(link);
    });
}

// Render a page by id without innerHTML
function renderPage(id) {
    const page = window.Pages.find(p => p.id === id);
    if (!page) return;

    appDiv.textContent = ''; // Clear previous content

    // If the page content is a DOM node, append it
    if (page.html instanceof HTMLElement) {
        appDiv.appendChild(page.html);
    } else if (typeof page.html === 'string') {
        // If it's a string of HTML, parse it safely
        const template = document.createElement('template');
        template.innerHTML = page.html.trim();

        Array.from(template.content.childNodes).forEach(node => {
            appDiv.appendChild(node);
        });
    }

    // Attach button listeners inside page content
    const buttons = appDiv.querySelectorAll('button[data-target]');
    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            renderPage(btn.dataset.target);
        });
    });
}

// Initialize SPA
buildNav();
renderPage('home');
