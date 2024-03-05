const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector(".email");
const messageRef = document.querySelector(".text");

form.addEventListener("input", function (event) {
    const formValue = {
        email: emailRef.value,
        message: messageRef.value,
   }
localStorage.setItem("feedback-form-state", JSON.stringify(formValue));
    
})
