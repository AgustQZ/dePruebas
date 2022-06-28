const names = [
    "Chris",
    "Li Kang",
    "Anne",
    "Francesca",
    "Mustafa",
    "Tina",
    "Bert",
    "Jada",
];
const para = document.createElement("p");
const section = document.querySelector("section");

// Add your code here
function chooseName() {
    let random = Math.floor(Math.random() * names.length);
    return names[random];
}

para.textContent = chooseName();

section.appendChild(para);
