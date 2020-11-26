clickEvent = document.getElementById("questionResponce")
yes = document.getElementById("yes")
no = document.getElementById("no")
answer = document.getElementById("answer-text")
answer2 = document.getElementById("answer-text2")

clickEvent.addEventListener("click", () => {
    if(yes.checked) {
        answer.style.display = "block"
        answer2.style.display = "none"
    }
    if(no.checked) {
        answer2.style.display = "block"
        answer.style.display = "none"
    }

});