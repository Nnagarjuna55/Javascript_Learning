function render(children){
    const app = document.getElementById("main");
    app.appendChild(children);
}

function h1(children){
    const element = document.createElement("h1")
    element.appendChild(children)
    return element;
}

function text(content) {
    return document.createTextNode(content);
}

render(h1(text("UI with out react")))