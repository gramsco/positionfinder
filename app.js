// X

let body = document.querySelector("body")
let stack = document.querySelector(".stack")


let i = 0;

body.addEventListener('click', position);

let positions = []

function position(e) {

    if (e.target.classList.contains("coord")) {

        let id_to_kill = e.target.id
        let element_to_kill = document.getElementById(id_to_kill)
        body.removeChild(element_to_kill);

        let id_to_kill2 = e.target.id + "li"
        let element_to_kill2 = document.getElementById(id_to_kill2)
        stack.removeChild(element_to_kill2);
    }

    else {
    let coord = {}
    coord.x = e.x + "px";
    coord.y = e.y + "px";
    coord.id = "" + e.x + e.y
    i++;
    positions.push(coord);

    let newdiv = document.createElement("div");
    newdiv.style.position = "fixed";
    newdiv.style.left = e.x + "px";
    newdiv.style.top = e.y + "px";
    newdiv.classList.add("coord")
    newdiv.innerHTML = i;
    newdiv.id = newdiv.style.left + newdiv.style.top;
    body.append(newdiv)

    let newli = document.createElement("li");
    newli.innerHTML = `${i} : x${e.x}:y${e.y}`;
    newli.id = newdiv.id + "li"
    stack.append(newli);
    }
}




