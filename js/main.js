const appDiv = document.getElementById('app');
const navDiv = document.getElementById('nav');

// Build nav from Pages array
function buildNav() {
    navDiv.innerHTML = window.Pages.map(page =>
        `<a href="#" data-target="${page.id}">${page.title}</a>`
    ).join('');

    // Attach click listeners
    document.querySelectorAll('nav a').forEach(link=>{
        link.addEventListener('click', e=>{
            e.preventDefault();
            renderPage(link.dataset.target);
        });
    });
}

// Render a page by id
function renderPage(id) {
    const page = window.Pages.find(p => p.id === id);
    if(!page) return;
    appDiv.innerHTML = page.html;

    // Attach button listeners inside page content
    const buttons = appDiv.querySelectorAll('button[data-target]');
    buttons.forEach(btn=>{
        btn.addEventListener('click', e=>{
            renderPage(btn.dataset.target);
        });
    });
}

// Initialize SPA
buildNav();
renderPage('home');
