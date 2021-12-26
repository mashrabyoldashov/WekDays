let elInputNumber = document.querySelector(".input-number");
let elBtnNumber = document.querySelector(".button-click");
let elAertInfo = document.querySelector(".alert-information");

elBtnNumber.addEventListener('click', ()=> {
    let inputInfo = elInputNumber.value;
    if(inputInfo == 1) {
        elAertInfo.textContent = "Dushanba";
    } else if(inputInfo == 2) {
        elAertInfo.textContent = "Seshanba";
    } else if(inputInfo == 3) {
        elAertInfo.textContent = "chorshanba";
    } else if(inputInfo == 4) {
        elAertInfo.textContent = "Payshanba";
    } else if(inputInfo == 5) {
        elAertInfo.textContent = "Juma";
    } else if(inputInfo == 6) {
        elAertInfo.textContent = "Shanba";
    } else if(inputInfo == 7) {
        elAertInfo.textContent = "Yakshanba";
    } else {
        elAertInfo.textContent = "iltimos 1 dan 7 gacha son kiriting";
    }
})