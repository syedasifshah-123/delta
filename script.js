const charVal = document.getElementById("textarea");
let totalCount =  document.getElementById("total-counter");
let remainCount = document.getElementById("remaining-counter");
const copyBtn = document.getElementById("copyText");
const customAlert = document.querySelector(".custom-alert");

let char = 0;

const updateCounter = () => {
    userChar = charVal.value.length;
    
    totalCount.innerText = userChar;

    remainCount.innerText = 150 - userChar;
    
}

charVal.addEventListener("keyup", () => updateCounter());

copyBtn.addEventListener("click", () =>{
    charVal.select();
    document.execCommand("copy");
    customAlert.style.transform = "translateX(0)";
    setTimeout(() => { 
        customAlert.style.transform = "translateX(calc(100% + 20px))";
    }, 3000);
});