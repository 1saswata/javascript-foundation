const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const contentP = document.createElement("p");
contentP.textContent = "Hey I'm red!";
contentP.style.color="red";
container.appendChild(contentP);

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";
container.appendChild(header3);

const div = document.createElement("div");
div.classList.add("contentDiv");
div.style.border = "2px black";
div.style["background-color"] = "pink";

const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";
div.appendChild(divH1);

const divP = document.createElement("p");
divP.textContent = "ME TOO!";
div.appendChild(divP);

container.appendChild(div);

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    const inputValue = input.value;
    input.value = "";
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button2 = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button2);
    span.textContent = inputValue;
    button2.textContent = "Delete";
    ul.appendChild(li);
    button2.addEventListener("click", ()=> ul.removeChild(li));
    input.focus();
})