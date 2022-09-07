const textArea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining");


textArea.addEventListener("keyup", ()=>{    
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalCounter.innerText = textArea.value.length 
    remainingCounter.innerText = (textArea.getAttribute("maxLength")) - textArea.value.length
}