const form = document["my-form"]

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const lastName = form.lastName.value
    const firstName = form.firstName.value
    form.firstName.value = ""
    form.lastName.value = ""
    const h1 = document.createElement('h1')
    h1.textContent = firstName + " " + lastName
    document.getElementsByTagName("body")[0].append(h1)
    
})
