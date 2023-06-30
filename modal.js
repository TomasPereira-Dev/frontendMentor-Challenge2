const requireEmailMessage = document.querySelector(".required-email-message");
const emailInput = document.querySelector(".input");


const Regex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

const updateEmail = ()=>{
    let email = emailInput.value;
    console.log(email, Regex.test(email))
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