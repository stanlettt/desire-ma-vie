function clickfunc(){
    window.location.href="desire-oui.html"
}

function increaseSize(){
    const ouiButton = document.querySelector(".oui");

    ouiButton.style.width = (ouiButton.offsetwidth + 70) + 'px';
    ouiButton.style.height = (ouiButton.offsetHeight + 70) + 'px';

    const currentFontSize = window.getComputedStyle(ouiBoutton).fontSize;
    const newFontSize = parseInt(currentFontSize) + 20 + 'px';
    ouiButton.style.fontSize = newFontSize
}
