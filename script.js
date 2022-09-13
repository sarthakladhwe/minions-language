const inputText = document.getElementById("input-textarea")
const translateBtn = document.getElementById("translate-btn")
const outputText = document.getElementById("output-text")

// Event listener

translateBtn.addEventListener('click', () => {
    if(inputText.value != "") {
        fetch(`https://api.funtranslations.com/translate/minion.json?text=${inputText.value}`)
        .then(res => res.json())
        .then(data => {
            if(data.contents) outputText.innerText = data.contents.translated
            else alert(data.error.message)
        })
        .catch(err => {
            alert(err)
            console.log("error ", err)
        })
    }   
})