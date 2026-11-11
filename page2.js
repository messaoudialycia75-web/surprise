const bodyElement = document.getElementById('pageBody');
const videoElement = document.getElementById('flowerVideo');
const textSection = document.getElementById('textSection');
const rightTextSection = document.getElementById('rightTextSection');
const categoryTitle = document.getElementById('categoryTitle');
const flowerTitle = document.getElementById('flowerTitle');
const flowerPoem = document.getElementById('flowerPoem');

let currentState = 0;

const contents = [
    {
        bgClass: "bg-blue",
        category: "Pour toi mon amour",
        title: "Mon Dahlia",
        poem: `<i>
            Comme un dahlia qui s'ouvre à la lumière,<br>
            Ton amour illumine mon univers.<br>
            Une douce tendresse,<br>
            Qui berce mon cœur et chasse mes tristesses.<br><br>
            À tes côtés, chaque instant est un cadeau,<br>
            Le plus précieux, le plus beau.
        </i>`,
        rightPoem: "",
        video: "dahlia.webm"
    },
    {
        bgClass: "bg-pink",
        category: "Joyeux Anniversaire",
        title: "Mon Orchidée",
        poem: `<i>
            Telle une orchidée d'une grâce infinie,<br>
            Tu embellis chaque jour de ma vie.<br>
            Ton sourire est un havre de paix,<br>
            Un feu sacré qui ne s'éteint jamais.<br><br>
            Je t'aime plus que les mots ne le disent,<br>
            Mon âme sœur, ma plus belle surprise.
        </i>`,
        rightPoem: "",
        video: "orchide.webm"
    },
    {
        bgClass: "bg-white-flower",
        category: "Pour la vie",
        title: "My Rose",
        poem: `<i>
            Ton amour en moi s'infuse et abonde.<br>
            Une flamme pure, un serment éternel,<br>
            Gravé dans nos cœurs et sous le ciel.<br><br>
            Je t'aimerai toujours, inlassablement,<br>
            Mon premier et mon dernier amant.
        </i>`,
        rightPoem: "",
        video: "rose.webm"
    },
    {
        bgClass: "bg-yellow",
        category: "Le mot de la fin",
        title: "Mon Tournesol",
        poem: `<i>
            Mon cher Mohand,<br><br>
            Je tenais à t'offrir un cadeau d'anniversaire qui était à la hauteur des efforts que tu fais au quotidien pour moi, mais il n'y a rien qui égale toutes les attentions que tu y mets.<br><br>
            J'espère tout de même que cette carte te plaît.
        </i>`,
        rightPoem: `<i>
            Cette dernière fleur symbolise par sa croissance mon amour pour toi, qui a grandi progressivement au cours du temps et des efforts que tu as mis dans notre relation, et symbolise aussi la toute première sunflower que tu m'as offerte.<br><br>
            Je t'aime Momo, n'en doute jamais.<br>
            Merveilleux anniversaire de la part de ta femme. 
        </i>`,
        video: "sunFlower.webm"
    }
];

videoElement.addEventListener('click', () => {
    videoElement.classList.add('slide-out');
    textSection.classList.add('animating');
    if (rightTextSection) rightTextSection.classList.add('animating');

    setTimeout(() => {
        currentState = (currentState + 1) % contents.length;
        const data = contents[currentState];

        bodyElement.className = data.bgClass;

        categoryTitle.textContent = data.category;
        flowerTitle.textContent = data.title;
        flowerPoem.innerHTML = data.poem;
        
        // Gère l'affichage du texte à droite uniquement pour le tournesol
        if (data.rightPoem) {
            rightTextSection.innerHTML = `<p class="poem-text">${data.rightPoem}</p>`;
            rightTextSection.style.display = "block";
        } else {
            rightTextSection.innerHTML = "";
            rightTextSection.style.display = "none";
        }

        videoElement.querySelector('source').setAttribute('src', data.video);
        videoElement.load();

        videoElement.classList.remove('slide-out');
        textSection.classList.remove('animating');
        if (rightTextSection) rightTextSection.classList.remove('animating');
    }, 400);
});