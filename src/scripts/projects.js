// No filepath: place in your main JS file or before </body>
const modal = document.getElementById('project-modal');
const body = document.body;

document.querySelectorAll('.project').forEach((card) => {
    card.addEventListener('click', () => {
        document.getElementById('modal-body').innerHTML = card.innerHTML;
        modal.classList.add('active');
        body.classList.add('modal-open');
    });
});

document.getElementById('modal-close').addEventListener('click', () => {
    modal.classList.remove('active');
    body.classList.remove('modal-open');
});

modal.addEventListener('click', (e) => {
    if (e.target.id === 'project-modal') {
        modal.classList.remove('active');
        body.classList.remove('modal-open');
    }
});