var modal = document.querySelector('.modal')

var modal1 = document.querySelector('.modal-inner1')
var btnMore = document.querySelector('.btn-more')
var btnMore1 = document.querySelector('.btn-more1')
var btnClose = document.querySelector('.modal-header i')
var btnClose1 = document.querySelector('.modal-header1 i')
var btnCopy = document.querySelector('.btn-copy')

function ToggleModal(e){
  console.log(e.target);
  modal.classList.toggle('hide')
}



btnMore.addEventListener('click',ToggleModal)
btnMore1.addEventListener('click',ToggleModal)

btnClose.addEventListener('click',ToggleModal)
btnClose1.addEventListener('click',ToggleModal)

const codeText = document.getElementById("code-text");

btnCopy.addEventListener("click", function () {
  // Copy mã "BGZ123" vào clipboard
  navigator.clipboard.writeText("BGZ30359456");

  // Hiển thị thông báo
  alert("Mã đã được sao chép thành công!");
});

//dropdown nav category
const optionMenu1111 = document.querySelector(".right-top-block")
const selectBtn1111 = optionMenu1111.querySelector(".right-top-block .filter-header")
const options1111 = optionMenu1111.querySelectorAll(".right-top-block .product-block")
const sBtn_text1111 = optionMenu1111.querySelector(".right-top-block .block-title");
selectBtn1111.addEventListener("click", () => optionMenu1111.classList.toggle("active"));       
options1111.forEach(option1111 =>{
    option1111.addEventListener("click", ()=>{
        let selectedOption1111 = option1111.querySelector(".option-text").innerText;
        sBtn_text1111.innerText = selectedOption1111;
        optionMenu1111.classList.remove("active");
    });
});

//dropdown voucher
const optionMenu11 = document.querySelector(".voucher-mobile")
const selectBtn11 = optionMenu11.querySelector(".voucher-mobile .voucher-header")
const options11 = optionMenu11.querySelectorAll(".voucher-mobile .block-line")
const sBtn_text11 = optionMenu11.querySelector(".voucher-mobile .block-title1");
selectBtn11.addEventListener("click", () => optionMenu11.classList.toggle("active"));       
options11.forEach(option11 =>{
    option11.addEventListener("click", ()=>{
        let selectedOption11 = option11.querySelector(".option-text").innerText;
        sBtn_text11.innerText = selectedOption11;
        optionMenu11.classList.remove("active");
    });
});

//dropdown voucher
const optionMenu112 = document.querySelector(".more-info-mobile")
const selectBtn112 = optionMenu112.querySelector(".more-info-mobile .more-info-header")
const options112 = optionMenu112.querySelectorAll(".more-info-mobile .block-line")
const sBtn_text112 = optionMenu112.querySelector(".more-info-mobile .block-title1");
selectBtn112.addEventListener("click", () => optionMenu112.classList.toggle("active"));       
options112.forEach(option112 =>{
    option112.addEventListener("click", ()=>{
        let selectedOption112 = option112.querySelector(".option-text").innerText;
        sBtn_text112.innerText = selectedOption112;
        optionMenu112.classList.remove("active");
    });
});