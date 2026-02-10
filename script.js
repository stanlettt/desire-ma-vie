function yes() {
    window.location.href = "love.html";
}

function no() {
    const btn = document.querySelector(".non");
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

