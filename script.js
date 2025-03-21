const submit = document.querySelector(".submit");
const message = document.querySelector(".message");
const main = document.querySelector(".main");
const rating = document.querySelector("#rating");
const alert_message = document.querySelector(".alert");
let isSelected = false;


submit.onclick =()=>{
    if(!isSelected){
        alert_message.style.transform = "translateY(0%)";
        alert_message.style.transition = "0.5s ease-in";
    }else if(rating_1.classList.contains("selected")){
        message.style.display = "block";
        main.style.display = "none";
        rating.textContent = "1";
    }else if(rating_2.classList.contains("selected")){
        message.style.display = "block";
        main.style.display = "none";
        rating.textContent = "2";
    }else if(rating_3.classList.contains("selected")){
        message.style.display = "block";
        main.style.display = "none";
        rating.textContent = "3";
    }else if(rating_4.classList.contains("selected")){
        message.style.display = "block";
        main.style.display = "none";
        rating.textContent = "4";
    }else if(rating_5.classList.contains("selected")){
        message.style.display = "block";
        main.style.display = "none";
        rating.textContent = "5";
    }
}

const rating_1 = document.querySelector(".rating-1");
const rating_2 = document.querySelector(".rating-2");
const rating_3 = document.querySelector(".rating-3");
const rating_4 = document.querySelector(".rating-4");
const rating_5 = document.querySelector(".rating-5");

rating_1.onclick =()=>{

    if(rating_1.classList.contains("selected")){
        rating_1.classList.remove("selected");
        isSelected = false;
    }else{
        rating_1.classList.add("selected");
        rating_2.classList.remove("selected");
        rating_3.classList.remove("selected");
        rating_4.classList.remove("selected");
        rating_5.classList.remove("selected");
        isSelected = true;
    }

    if(alert_message.style.transform === "translateY(0%)"){
        alert_message.style.transform = "translateY(-200%)";
        alert_message.style.transition = "0.7s ease-in";
    }
}
rating_2.onclick =()=>{
    if(rating_2.classList.contains("selected")){
        rating_2.classList.remove("selected");
        isSelected = false;
    }else{
        rating_2.classList.add("selected");
        rating_1.classList.remove("selected");
        rating_3.classList.remove("selected");
        rating_4.classList.remove("selected");
        rating_5.classList.remove("selected");
        isSelected = true;
    }

    if(alert_message.style.transform === "translateY(0%)"){
        alert_message.style.transform = "translateY(-200%)";
        alert_message.style.transition = "0.7s ease-in";
    }
    
}
rating_3.onclick =()=>{
    if(rating_3.classList.contains("selected")){
        rating_3.classList.remove("selected");
        isSelected = false;
    }else{
        rating_3.classList.add("selected");
        rating_1.classList.remove("selected");
        rating_2.classList.remove("selected");
        rating_4.classList.remove("selected");
        rating_5.classList.remove("selected");
        isSelected = true;
    }

    if(alert_message.style.transform === "translateY(0%)"){
        alert_message.style.transform = "translateY(-200%)";
        alert_message.style.transition = "0.7s ease-in";
    }

}
rating_4.onclick =()=>{
    if(rating_4.classList.contains("selected")){
        rating_4.classList.remove("selected");
        isSelected = false;
    }else{
        rating_4.classList.add("selected");
        rating_1.classList.remove("selected");
        rating_2.classList.remove("selected");
        rating_3.classList.remove("selected");
        rating_5.classList.remove("selected");
        isSelected =true
    }

    if(alert_message.style.transform === "translateY(0%)"){
        alert_message.style.transform = "translateY(-200%)";
        alert_message.style.transition = "0.7s ease-in";
    }
    
}
rating_5.onclick =()=>{
    if(rating_5.classList.contains("selected")){
        rating_5.classList.remove("selected");
        isSelected = false;
    }else{
        rating_5.classList.add("selected");
        rating_1.classList.remove("selected");
        rating_2.classList.remove("selected");
        rating_3.classList.remove("selected");
        rating_4.classList.remove("selected");
        isSelected = true;
    }

    if(alert_message.style.transform === "translateY(0%)"){
        alert_message.style.transform = "translateY(-200%)";
        alert_message.style.transition = "0.7s ease-in";
    }

}


const alert_button = document.querySelector(".okay");

alert_button.onclick =()=>{
    if(alert_message.style.transform === "translateY(0%)"){
        alert_message.style.transform = "translateY(-200%)";
        alert_message.style.transition = "0.7s ease-in";
    }
}