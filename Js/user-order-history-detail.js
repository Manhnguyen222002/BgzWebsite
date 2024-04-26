var modal = document.querySelector('.modal')
var btnCancel = document.querySelector('.btn-cancel')
var btnNo = document.querySelector('.btn-no')
var btnYes = document.querySelector('.btn-yes')

function ToggleModal(e){
  console.log(e.target);
  modal.classList.toggle('hide')
}

btnCancel.addEventListener('click',ToggleModal)

btnNo.addEventListener('click',ToggleModal)

//dropdown bảng điều khiển
const optionMenu11 = document.querySelector(".user-info-left")
const selectBtn11 = optionMenu11.querySelector(".user-info-left .user-left__list")
const options11 = optionMenu11.querySelectorAll(".user-info-left .user-left__option")
const sBtn_text11 = optionMenu11.querySelector(".user-info-left .left-info");
selectBtn11.addEventListener("click", () => optionMenu11.classList.toggle("active"));       
options11.forEach(option11 =>{
    option11.addEventListener("click", ()=>{
        let selectedOption11 = option11.querySelector(".option-text").innerText;
        sBtn_text11.innerText = selectedOption11;
        optionMenu11.classList.remove("active");
    });
});