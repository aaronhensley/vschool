const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    // console.log(form.yesOrNo.value)
    // console.log(form.entertainment)

    // const checkedInputs = []

    // for(let i = 0; i < form.entertainment.length; i++){
    //     if(form.entertainment[i].checked){
    //         checkedInputs.push(form.entertainment[i].value)
    //     }
    // }
    // console.log(checkedInputs)

    console.log(form.city.value)
})

// form.addEventListener("submit", function(event) {
//     event.preventDefault()
//     const lastName = form.lastName.value
//     const firstName = form.firstName.value
//     form.firstName.value = ""
//     form.lastName.value = ""
//     const h1 = document.createElement('h1')
//     h1.textContent = firstName + " " + lastName
//     document.getElementsByTagName("body")[0].append(h1)
    
// })

// const words = document.words
// document.words.addEventListener("submit", function(event) {
//     event.preventDefault()

//     const noun = document.words.noun.value
//     const adverb = document.words.adverb.value
//     const verb = document.words.verb.value

//     alert("The " + noun + " did " + adverb + " " + verb + " in it's home.")
// })
