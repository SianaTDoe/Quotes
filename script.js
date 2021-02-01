import { Liste, Photographies, TODO } from "./library.js";

const bloc = document.querySelector('#bloc');
const punaise = document.querySelector('#punaise');
const quote = document.querySelector(".text");

const photo = document.querySelector("#photo");
const punaise_photo = document.querySelector('#punaise_photo');

const todo = document.querySelector("#todo");
const punaise_todo = document.querySelector('#punaise_todo');

const tableau = document.querySelector("#tableau");

const ul = document.querySelector('ul');



bloc.addEventListener("click", (e) => {
    e.stopPropagation();  //click sur la div, pas sur l'élément derrière
    blocnote();
});

function blocnote() {
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    punaise.style.backgroundColor = color;
    quote.innerHTML = Liste[Math.random() * Liste.length << 0];
}


photo.addEventListener("click", (e) => {
    e.stopPropagation();
    photographie();
});

function photographie() {
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    punaise_photo.style.backgroundColor = color;
    photo.style.backgroundImage = Photographies[Math.random() * Photographies.length << 0];
}


todo.addEventListener("click", (e) => {
    e.stopPropagation();
    todolist();
});

function todolist() {
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    punaise_todo.style.backgroundColor = color;
    
    const copieTODO = [...TODO];
    ul.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const li = copieTODO[Math.random() * copieTODO.length << 0];
        const id = copieTODO.indexOf(li);
        copieTODO.splice(id, 1);
        ul.insertAdjacentHTML("beforeend", `<li>${li}</li>`)
    }

}



tableau.addEventListener("click", () => {
    blocnote();
    photographie();
    todolist();
  
});

