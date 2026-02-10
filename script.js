function clickfunc() {
    window.location.href = "desire-oui.html";
}

function increaseSize() {
    const ouiButton = document.querySelector(".oui");

    ouiButton.style.width = (ouiButton.offsetWidth + 70) + "px";
    ouiButton.style.height = (ouiButton.offsetHeight + 70) + "px";

    const currentFontSize = window.getComputedStyle(ouiButton).fontSize;
    const newFontSize = parseInt(currentFontSize) + 20 + "px";
    ouiButton.style.fontSize = newFontSize;
}







