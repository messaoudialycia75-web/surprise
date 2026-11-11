const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

// Effet d'esquive sur le bouton NO quand la souris s'approche
btnNo.addEventListener('mouseover', () => {
    const x = (Math.random() - 0.5) * 120;
    const y = (Math.random() - 0.5) * 60;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
});

btnNo.addEventListener('click', () => {
    alert("Oups... Ce bouton ne fonctionne pas ! Clique plutôt sur YES 😉");
});

// Clic sur YES : redirection vers la Page 2
btnYes.addEventListener('click', () => {
    window.location.href = "Yes.html";
});