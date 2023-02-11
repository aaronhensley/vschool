const form = document.getElementById("airline-form");
const submit = document.getElementById("submit");

function formAlert () {

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const location = form.travelLocation.value;
    // const diet = form.diet.value;

    const diet = []
    if (form.vegan.checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (form.gluten.checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.paleo.checked) {
        diet.push(document.getElementById('paleo').value);
    }
   
    window.alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet[0] + "\nAwesome, now if you die, it won't be an accident..");
   
    
}

submit.addEventListener("click", formAlert)