const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector(".email");
const messageRef = document.querySelector(".text");
const localStorageKey = "feedback-form-state";

const savedValue = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
emailRef.value = savedValue.email ?? "";
messageRef.value = savedValue.message ?? "";

formRef.addEventListener("input", function (event) {
    if (event.target.matches('.email') || event.target.matches('.text')) {
        const formValue = {
            email: emailRef.value,
            message: messageRef.value,
        }
        localStorage.setItem(localStorageKey, JSON.stringify(formValue));
    }
});


formRef.addEventListener("submit", function (event) {
    event.preventDefault();
    const formValue = {
        email: emailRef.value,
        message: messageRef.value,
    };
    console.log(formValue);
    localStorage.removeItem(localStorageKey);
    formRef.reset();
   } )
