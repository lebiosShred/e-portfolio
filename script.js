const targetDiv = document.getElementById('boxes-toggled');
const btn = document.getElementById('menu');

btn.onclick = function() {
    if (targetDiv.style.display = "hidden") {
        targetDiv.style.display = "block";
    } else {
        targetDiv.style.display = "none";
    }
};


const closeToggle = document.getElementById('close-toggle')

closeToggle.onclick = function() {
    if (targetDiv.style.display !== "block") {
        targetDiv.style.display = "hidden";
    } else {
        targetDiv.style.display = "none";
    }
}
;