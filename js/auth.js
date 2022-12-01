const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const error = document.querySelector(".error");
const submitButton = document.querySelector(".submitBtn");

const users = JSON.parse(localStorage.getItem("users"));

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const isUser = !!users.find(item => item.email === emailInput.value );


  if(emailInput.value !== "" &&  passwordInput.value !== ""){

    if(isUser){

      localStorage.setItem("isAuth", "true")
      window.open("../index.html", "_self")

    }else {
      error.innerHTML = "Dont find like user"
    }

  }else {
    error.innerHTML = "Fill the area"

  }

})


