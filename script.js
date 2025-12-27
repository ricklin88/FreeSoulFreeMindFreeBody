const quoteTab = document.getElementById('quoteTab');
const quoteDrawer = document.getElementById('quoteDrawer');
const quoteClose = document.getElementById('quoteClose');
const quoteOverlay = document.getElementById('quoteOverlay');

function openDrawer() {
    quoteDrawer.classList.add('open');
    quoteOverlay.classList.add('open');
}

function closeDrawer() {
    quoteDrawer.classList.remove('open');
    quoteOverlay.classList.remove('open');
}

quoteTab.addEventListener('click', () => {
    if(!quoteDrawer.classList.contains('open')) {
        openDrawer();
    }
});

quoteClose.addEventListener('click', () => {
    closeDrawer();
});

quoteOverlay.addEventListener('click', () => {
    closeDrawer();
});