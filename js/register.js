

const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const error = document.querySelector(".error");
const submitButton = document.querySelector(".submitBtn");


window.addEventListener("load", () => {
  if(!localStorage.getItem("users")){
    localStorage.setItem("users", JSON.stringify([]))
  }
})

const users = JSON.parse(localStorage.getItem("users"));


submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if(emailInput.value !== "" && passwordInput.value !== ""){
    const isUsers = !!users.find(item => item.email === emailInput.value);

    if(isUsers){
      error.innerHTML = "There is like user"
    }else {
      const allUsers = JSON.parse(localStorage.getItem("users"));

      localStorage.setItem("users", JSON.stringify(
        [
          ...allUsers,
          {email:emailInput.value, password:passwordInput.value}
        ]
      ))
      window.open("../auth.html", "_self")
    }
    emailInput.value = ""
    passwordInput.value = ""
  }else {
    error.innerHTML = "Fill the area"
  }

})