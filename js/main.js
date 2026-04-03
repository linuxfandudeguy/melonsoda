const appDiv = document.getElementById('app');
const navDiv = document.getElementById('nav');

// Build nav from Apps array
function buildNav() {
    navDiv.innerHTML = window.Apps.map(app => `<a href="#" data-target="${app.id}">${app.title}</a>`).join('');
    document.querySelectorAll('nav a').forEach(link=>{
        link.addEventListener('click', e=>{
            e.preventDefault();
            renderPage(link.dataset.target);
        });
    });
}

// Render a page by id
function renderPage(id) {
    const app = window.Apps.find(a=>a.id===id);
    if(!app) return;
    appDiv.innerHTML = app.html;

    // attach button listeners inside app content
    const buttons = appDiv.querySelectorAll('button[data-target]');
    buttons.forEach(btn=>{
        btn.addEventListener('click', e=>{
            renderPage(btn.dataset.target);
        });
    });
}

// Init
buildNav();
renderPage('home');
