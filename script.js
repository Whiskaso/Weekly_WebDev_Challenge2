function vievMoreButton() {

const vievMore = document.querySelector('#vievMore');
const blogButton = document.querySelector('#blogButton');

    if(vievMore.style.display == "none"){
        vievMore.style.display = "flex";
        blogButton.innerHTML = "Show Less";
    } else {
        vievMore.style.display = "none";
        blogButton.innerHTML = "Viev more";
    }
}