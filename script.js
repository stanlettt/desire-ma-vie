



// Scroll fluide vers la section message
function scrollToMessage(){
    const section = document.getElementById("message");
    if(section){
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Affiche l'overlay quand elle clique sur la question
function showAnswer(){

    // Vérifie si un overlay existe déjà
    if(document.querySelector(".overlay")) return;

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    overlay.innerHTML = `
        <div class="overlay-content">
            <h1>Notre Histoire Commence ❤️</h1>
            <p>
                Ce moment marque le début de quelque chose de vrai.
                Une décision d’écrire ensemble.
                Chapitre après chapitre.
            </p>
            <button onclick="startStory()">Commencer le premier chapitre</button>
        </div>
    `;

    document.body.appendChild(overlay);
}

// Redirection vers la page finale
function startStory(){
    window.location.href = "desire-oui.html";
}



