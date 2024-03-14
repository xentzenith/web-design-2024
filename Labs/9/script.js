var toggleButton = () => toggleVisibility()

var prev;

var element = document.getElementsByTagName(`p`)[0]

function toggleVisibility(){
    if(element.style.visibility == "hidden") element.style.visibility = "visible"
    else element.style.visibility = "hidden"
}

element.addEventListener("mouseover", event => {
    prev = event.target.innerText
    event.target.innerText = `Text changed!`    
})

element.addEventListener("mouseout", event => {
    event.target.innerText = prev
})