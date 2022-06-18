const form = document.getElementById("form")
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener('click',(e)=>{
    e.preventDefault();

    submited();
})

function submited(){
    const firstNameValue =  firstName.value.trim();
    if (firstNameValue === ""){
        document.getElementsByTagName('small').style.visibility = visible
        // error();
    }

};

// function error(){
//     document.getElementsByTagName('small').style.visibility = visible
//     const formControl = document.getElementsByTagName("input");
//     formControl.classList.add("error")
// }
