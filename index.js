const input = document.getElementById("ta")
const form = document.querySelector("form")
const ul = document.querySelector("ul")
const secul = document.getElementById ("secondul")
console.log (secul)
const main = document.querySelector ("main")



console.log (input, form, ul)

form.addEventListener ("submit", (e) => {
    e.preventDefault ()

    const inputValue = input.value.trim()

    if(inputValue != ""){
        const listItem = `<li>  
            <span>${inputValue} </span>
            <span>
                <i class="bi check bi-check-square-fill"></i><i class="bi bi-trash-fill delete"></i>
            </span>
         </li>` 
        ul.innerHTML = listItem  + ul.innerHTML 
        input.value = ""
        
    }
    else{
        alert ("This is a required field. Please fill")
    }

})

    main.addEventListener("click", (e) => {
        e.preventDefault()
        const targetElement = e.target
        if (targetElement.tagName == "I" && targetElement.classList.contains("delete")){ 
            // console.log (targetElement.classList.contains("bi"))
            // if(targetElement.classList.includes("delete")) {
                targetElement.parentElement.parentElement.remove()
            // }
        }
        if (targetElement.tagName == "I" && targetElement.classList.contains("check")) {
            const note = targetElement.parentElement.previousElementSibling

            console.log (note)
            const secondlistItem = `<li> <span> ${note.textContent} </span> <span><i class="bi bi-trash-fill delete"></i></span> </li>`
            secul.innerHTML = secondlistItem + secul.innerHTML
            targetElement.parentElement.parentElement.remove()

    

        }
        
        // console.log (e.target.tagName)
    } )


// const removeButton = document.getElementById('remove_h2')
// removeButton.addEventListener('click', (e) => {
//  e.preventDefault()
//  document.querySelector('h2').remove()
// }
// )