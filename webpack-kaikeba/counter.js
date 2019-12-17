function counter() {
    var div = document.createElement("div");
    div.setAttribute("id", "counter");
    div.style.border = '1px solid red'
    div.innerHTML = 1;
    div.onclick = function () {
        div.innerHTML = parseInt(div.innerHTML, 10) + 10;
    };
    document.body.appendChild(div);
}

export default counter;