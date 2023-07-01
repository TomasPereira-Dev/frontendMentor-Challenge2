const requireEmailMessage = document.querySelector(".required-email-message");
const newsletterComponentContainer = document.querySelector(".newsletter-component-container");
const modalContainer = document.querySelector(".form-success-container");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const formSubmit = document.querySelector("form");
const formSuccessTextSpan = document.querySelector(".form-success-text-span");
const emailInput = document.querySelector(".input");


const Regex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

let email = null;

const updateEmail = ()=>{
    email = emailInput.value;
    if(!Regex.test(email)){
        requireEmailMessage.style.opacity = "100%";
        emailInput.style.backgroundColor = " hsl(5, 100%, 95%)";
        emailInput.style.border = "1px solid #FF673E";
        emailInput.style.color = "#FF673E";

    }else{
        requireEmailMessage.style.opacity = "0";
        emailInput.style.backgroundColor = "#ffffff";
        emailInput.style.border = "1px solid hsl(234, 29%, 20%)";
        emailInput.style.color = "hsl(234, 29%, 20%)";
    }
}
emailInput.addEventListener("input", updateEmail);

const showModal = (e)=>{
        e.preventDefault()
        modalContainer.classList.toggle("open-modal")
        modalContainer.style.display = "flex";
        newsletterComponentContainer.style.display = "none";
        formSuccessTextSpan.innerText = `${email}`
}
formSubmit.addEventListener("submit", showModal);

const closeModal = ()=>{
        modalContainer.style.display = "none";
        newsletterComponentContainer.style.display = "flex";
        modalContainer.classList.toggle("open-modal");
}
modalCloseBtn.addEventListener("click", closeModal);
