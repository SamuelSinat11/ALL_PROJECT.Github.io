const body = document.getElementsByTagName("body") [0]

function setColor (name) { 
    body.style.backgroundColor = name; 
    
}

function randomColor() {
    const brown = Math.round(Math.random() * 255) 
    const red = Math.round(Math.random() * 255)
    const pink = Math.round(Math.random() * 255)

    const color = `rgb(${brown}, ${red}, ${pink})`
    body.style.backgroundColor = color; 
    
}

randomColor()