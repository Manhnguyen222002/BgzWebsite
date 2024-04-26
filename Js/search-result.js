//Slider khoảng giá
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

//Slider khoảng thời gian min
const rangeInput1 = document.querySelectorAll(".range-input1 input"),
priceInput1 = document.querySelectorAll(".price-input1 input"),
range1 = document.querySelector(".slider1 .progress1");
let priceGap1 = 5;
priceInput1.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice1 = parseInt(priceInput1[0].value),
        maxPrice1 = parseInt(priceInput1[1].value);
        
        if((maxPrice1 - minPrice1 >= priceGap1) && maxPrice1 <= rangeInput1[1].max){
            if(e.target.className === "input-min1"){
                rangeInput1[0].value = minPrice1;
                range1.style.left = ((minPrice1 / rangeInput1[0].max) * 100) + "%";
            }else{
                rangeInput1[1].value = maxPrice1;
                range1.style.right = 100 - (maxPrice1 / rangeInput1[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput1.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal1 = parseInt(rangeInput1[0].value),
        maxVal1 = parseInt(rangeInput1[1].value);
        if((maxVal1 - minVal1) < priceGap1){
            if(e.target.className === "range-min1"){
                rangeInput1[0].value = maxVal1 - priceGap1
            }else{
                rangeInput1[1].value = minVal1 + priceGap1;
            }
        }else{
            priceInput1[0].value = minVal1;
            priceInput1[1].value = maxVal1;
            range1.style.left = ((minVal1 / rangeInput1[0].max) * 100) + "%";
            range1.style.right = 100 - (maxVal1 / rangeInput1[1].max) * 100 + "%";
        }
    });
});

//Slider khoảng thời gian max
const rangeInput2 = document.querySelectorAll(".range-input2 input"),
priceInput2 = document.querySelectorAll(".price-input2 input"),
range2 = document.querySelector(".slider2 .progress2");
let priceGap2 = 5;
priceInput2.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice2 = parseInt(priceInput2[0].value),
        maxPrice2 = parseInt(priceInput2[1].value);
        
        if((maxPrice2 - minPrice2 >= priceGap2) && maxPrice2 <= rangeInput2[1].max){
            if(e.target.className === "input-min2"){
                rangeInput2[0].value = minPrice2;
                range2.style.left = ((minPrice2 / rangeInput2[0].max) * 100) + "%";
            }else{
                rangeInput2[1].value = maxPrice2;
                range2.style.right = 100 - (maxPrice2 / rangeInput2[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput2.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal2= parseInt(rangeInput2[0].value),
        maxVal2 = parseInt(rangeInput2[1].value);
        if((maxVal2 - minVal2) < priceGap2){
            if(e.target.className === "range-min2"){
                rangeInput2[0].value = maxVal2 - priceGap2
            }else{
                rangeInput2[1].value = minVal2 + priceGap2;
            }
        }else{
            priceInput2[0].value = minVal2;
            priceInput2[1].value = maxVal2;
            range2.style.left = ((minVal2 / rangeInput2[0].max) * 100) + "%";
            range2.style.right = 100 - (maxVal2 / rangeInput2[1].max) * 100 + "%";
        }
    });
});

//Slider khoảng tuổi
const rangeInput3 = document.querySelectorAll(".range-input3 input"),
priceInput3 = document.querySelectorAll(".price-input3 input"),
range3 = document.querySelector(".slider3 .progress3");
let priceGap3 = 1;
priceInput3.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice3 = parseInt(priceInput3[0].value),
        maxPrice3 = parseInt(priceInput3[1].value);
        
        if((maxPrice3 - minPrice3 >= priceGap3) && maxPrice3 <= rangeInput3[1].max){
            if(e.target.className === "input-min3"){
                rangeInput3[0].value = minPrice3;
                range3.style.left = ((minPrice3 / rangeInput3[0].max) * 100) + "%";
            }else{
                rangeInput3[1].value = maxPrice3;
                range3.style.right = 100 - (maxPrice3 / rangeInput3[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput3.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal3= parseInt(rangeInput3[0].value),
        maxVal3 = parseInt(rangeInput3[1].value);
        if((maxVal3 - minVal3) < priceGap3){
            if(e.target.className === "range-min3"){
                rangeInput3[0].value = maxVal3 - priceGap3
            }else{
                rangeInput3[1].value = minVal3 + priceGap3;
            }
        }else{
            priceInput3[0].value = minVal3;
            priceInput3[1].value = maxVal3;
            range3.style.left = ((minVal3 / rangeInput3[0].max) * 100) + "%";
            range3.style.right = 100 - (maxVal3 / rangeInput3[1].max) * 100 + "%";
        }
    });
});

//dropdown của filter status
const optionMenu = document.querySelector(".filter-status"),
       selectBtn = optionMenu.querySelector(".filter-status .filter-header"),
       options = optionMenu.querySelectorAll(".filter-status .radio-item"),
       sBtn_text = optionMenu.querySelector(".filter-status .filter-title");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});

//dropdown của filter category
const optionMenu1 = document.querySelector(".filter-category"),
       selectBtn1 = optionMenu1.querySelector(".filter-category .filter-header"),
       options1 = optionMenu1.querySelectorAll(".filter-category .radio-item"),
       sBtn_text1 = optionMenu1.querySelector(".filter-category .filter-title");
selectBtn1.addEventListener("click", () => optionMenu1.classList.toggle("active"));       
options1.forEach(option1 =>{
    option1.addEventListener("click", ()=>{
        let selectedOption1 = option1.querySelector(".option-text").innerText;
        sBtn_text1.innerText = selectedOption1;
        optionMenu1.classList.remove("active");
    });
});

//dropdown của filter genre
const optionMenu2 = document.querySelector(".filter-genre"),
       selectBtn2 = optionMenu2.querySelector(".filter-genre .filter-header"),
       options2 = optionMenu2.querySelectorAll(".filter-genre .radio-item"),
       sBtn_text2 = optionMenu2.querySelector(".filter-genre .filter-title");
selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));       
options2.forEach(option2 =>{
    option2.addEventListener("click", ()=>{
        let selectedOption2 = option2.querySelector(".option-text").innerText;
        sBtn_text2.innerText = selectedOption2;
        optionMenu2.classList.remove("active");
    });
});

//dropdown của filter genre
const optionMenu3 = document.querySelector(".filter-price"),
       selectBtn3 = optionMenu3.querySelector(".filter-price .filter-header"),
       options3 = optionMenu3.querySelectorAll(".filter-price .radio-item1"),
       sBtn_text3 = optionMenu3.querySelector(".filter-price .filter-title");
selectBtn3.addEventListener("click", () => optionMenu3.classList.toggle("active"));       
options3.forEach(option3 =>{
    option3.addEventListener("click", ()=>{
        let selectedOption3 = option3.querySelector(".option-text").innerText;
        sBtn_text3.innerText = selectedOption3;
        optionMenu3.classList.remove("active");
    });
});

//dropdown của filter time
const optionMenu4 = document.querySelector(".filter-time"),
       selectBtn4 = optionMenu4.querySelector(".filter-time .filter-header"),
       options4 = optionMenu4.querySelectorAll(".filter-time .radio-item2"),
       sBtn_text4 = optionMenu4.querySelector(".filter-time .filter-title");
selectBtn4.addEventListener("click", () => optionMenu4.classList.toggle("active"));       
options4.forEach(option4 =>{
    option4.addEventListener("click", ()=>{
        let selectedOption4 = option4.querySelector(".option-text").innerText;
        sBtn_text4.innerText = selectedOption4;
        optionMenu4.classList.remove("active");
    });
});

//dropdown của filter age
const optionMenu5 = document.querySelector(".filter-age"),
       selectBtn5 = optionMenu5.querySelector(".filter-age .filter-header"),
       options5 = optionMenu5.querySelectorAll(".filter-age .radio-item1"),
       sBtn_text5 = optionMenu5.querySelector(".filter-age .filter-title");
selectBtn5.addEventListener("click", () => optionMenu5.classList.toggle("active"));       
options5.forEach(option5 =>{
    option5.addEventListener("click", ()=>{
        let selectedOption5 = option5.querySelector(".option-text").innerText;
        sBtn_text5.innerText = selectedOption5;
        optionMenu5.classList.remove("active");
    });
});

//dropdown của filter rate
const optionMenu6 = document.querySelector(".filter-rate"),
       selectBtn6 = optionMenu6.querySelector(".filter-rate .filter-header"),
       options6 = optionMenu6.querySelectorAll(".filter-rate .radio-item"),
       sBtn_text6 = optionMenu6.querySelector(".filter-rate .filter-title");
selectBtn6.addEventListener("click", () => optionMenu6.classList.toggle("active"));       
options6.forEach(option6 =>{
    option6.addEventListener("click", ()=>{
        let selectedOption6 = option6.querySelector(".option-text").innerText;
        sBtn_text6.innerText = selectedOption6;
        optionMenu6.classList.remove("active");
    });
});




//Toastify

function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
      const toast = document.createElement("div");
  
      // Auto remove toast
      const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
      }, duration + 1000);
  
      // Remove toast when clicked
      toast.onclick = function (e) {
        if (e.target.closest(".toast__close")) {
          main.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      };
  
      const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle"
      };
      const icon = icons[type];
      const delay = (duration / 1000).toFixed(2);
  
      toast.classList.add("toast", `toast--${type}`);
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
  
      toast.innerHTML = `
                      <div class="toast__icon">
                          <i class="${icon}"></i>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                          <i class="fas fa-times"></i>
                      </div>
                  `;
      main.appendChild(toast);
    }
  }
  
function showSuccessToast() {
    toast({
      title: "Thêm thành công!",
      message: "Sản phẩm đã được thêm vào giỏ hàng.",
      type: "success",
      duration: 2500
    });
  }

  function showErrorToast() {
    toast({
      title: "Thất bại!",
      message: "Có lỗi xảy ra, vui lòng thử lại.",
      type: "error",
      duration: 5000
    });
  }

  const btnOpenNav111 = document.getElementById('mobile11')
  const btnCloseNav111 = document.querySelector('.nav-close11')
  const sideNav111 = document.querySelector('.side-filter11')
  const backdrop211 = document.querySelector('.backdrop3')
  btnOpenNav111.addEventListener('click',openNav1)
  btnCloseNav111.addEventListener('click',closeNav1)
  
  function openNav1(){
    sideNav111.classList.add('open')
    backdrop211.classList.add('show')
  }
  
  function closeNav1(){
    sideNav111.classList.remove('open')
    backdrop211.classList.remove('show')
  }

//dropdown desktop của filter
//dropdown của filter status
const optionMenu11 = document.querySelector(".filter-status1"),
       selectBtn11 = optionMenu11.querySelector(".filter-status1 .filter-header"),
       options11 = optionMenu11.querySelectorAll(".filter-status1 .radio-item"),
       sBtn_text11 = optionMenu11.querySelector(".filter-status1 .filter-title");
selectBtn11.addEventListener("click", () => optionMenu11.classList.toggle("active"));       
options11.forEach(option11 =>{
    option11.addEventListener("click", ()=>{
        let selectedOption = option11.querySelector(".option-text").innerText;
        sBtn_text11.innerText = selectedOption;
        optionMenu11.classList.remove("active");
    });
});

//dropdown của filter category
const optionMenu22 = document.querySelector(".filter-category1"),
       selectBtn22 = optionMenu22.querySelector(".filter-category1 .filter-header"),
       options22 = optionMenu22.querySelectorAll(".filter-category1 .radio-item"),
       sBtn_text22 = optionMenu22.querySelector(".filter-category1 .filter-title");
selectBtn22.addEventListener("click", () => optionMenu22.classList.toggle("active"));       
options22.forEach(option22 =>{
    option22.addEventListener("click", ()=>{
        let selectedOption22 = option22.querySelector(".option-text").innerText;
        sBtn_text22.innerText = selectedOption22;
        optionMenu22.classList.remove("active");
    });
});

//dropdown của filter genre
const optionMenu33 = document.querySelector(".filter-genre1"),
       selectBtn33 = optionMenu33.querySelector(".filter-genre1 .filter-header"),
       options33 = optionMenu33.querySelectorAll(".filter-genre1 .radio-item"),
       sBtn_text33 = optionMenu33.querySelector(".filter-genre1 .filter-title");
selectBtn33.addEventListener("click", () => optionMenu33.classList.toggle("active"));       
options33.forEach(option33 =>{
    option33.addEventListener("click", ()=>{
        let selectedOption33 = option33.querySelector(".option-text").innerText;
        sBtn_text33.innerText = selectedOption33;
        optionMenu33.classList.remove("active");
    });
});

//dropdown của filter genre
const optionMenu44 = document.querySelector(".filter-price1"),
       selectBtn44 = optionMenu44.querySelector(".filter-price1 .filter-header"),
       options44 = optionMenu44.querySelectorAll(".filter-price1 .radio-item1"),
       sBtn_text44 = optionMenu44.querySelector(".filter-price1 .filter-title");
selectBtn44.addEventListener("click", () => optionMenu44.classList.toggle("active"));       
options44.forEach(option44 =>{
    option44.addEventListener("click", ()=>{
        let selectedOption44 = option44.querySelector(".option-text").innerText;
        sBtn_text44.innerText = selectedOption44;
        optionMenu44.classList.remove("active");
    });
});

//dropdown của filter time
const optionMenu55 = document.querySelector(".filter-time1"),
       selectBtn55 = optionMenu55.querySelector(".filter-time1 .filter-header"),
       options55 = optionMenu55.querySelectorAll(".filter-time1 .radio-item2"),
       sBtn_text55 = optionMenu55.querySelector(".filter-time1 .filter-title");
selectBtn55.addEventListener("click", () => optionMenu55.classList.toggle("active"));       
options55.forEach(option55 =>{
    option55.addEventListener("click", ()=>{
        let selectedOption55 = option55.querySelector(".option-text").innerText;
        sBtn_text55.innerText = selectedOption55;
        optionMenu55.classList.remove("active");
    });
});

//dropdown của filter age
const optionMenu66 = document.querySelector(".filter-age1"),
       selectBtn66 = optionMenu66.querySelector(".filter-age1 .filter-header"),
       options66 = optionMenu66.querySelectorAll(".filter-age1 .radio-item1"),
       sBtn_text66 = optionMenu66.querySelector(".filter-age1 .filter-title");
selectBtn66.addEventListener("click", () => optionMenu66.classList.toggle("active"));       
options66.forEach(option66 =>{
    option66.addEventListener("click", ()=>{
        let selectedOption66 = option66.querySelector(".option-text").innerText;
        sBtn_text66.innerText = selectedOption66;
        optionMenu66.classList.remove("active");
    });
});

//dropdown của filter rate
const optionMenu77 = document.querySelector(".filter-rate1"),
       selectBtn77 = optionMenu77.querySelector(".filter-rate1 .filter-header"),
       options77 = optionMenu77.querySelectorAll(".filter-rate1 .radio-item"),
       sBtn_text77 = optionMenu77.querySelector(".filter-rate1 .filter-title");
selectBtn77.addEventListener("click", () => optionMenu77.classList.toggle("active"));       
options77.forEach(option77 =>{
    option77.addEventListener("click", ()=>{
        let selectedOption77 = option77.querySelector(".option-text").innerText;
        sBtn_text77.innerText = selectedOption77;
        optionMenu77.classList.remove("active");
    });
});

//Slider khoảng giá
const rangeInput111 = document.querySelectorAll(".range-input-desktop input"),
priceInput111 = document.querySelectorAll(".price-input-desktop input"),
range111 = document.querySelector(".slider-desktop .progress");
let priceGap111 = 1000;
priceInput111.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice111 = parseInt(priceInput111[0].value),
        maxPrice111 = parseInt(priceInput111[1].value);
        
        if((maxPrice111 - minPrice111 >= priceGap111) && maxPrice111 <= rangeInput111[1].max){
            if(e.target.className === "input-min"){
                rangeInput111[0].value = minPrice111;
                range111.style.left = ((minPrice111 / rangeInput111[0].max) * 100) + "%";
            }else{
                rangeInput111[1].value = maxPrice111;
                range111.style.right = 100 - (maxPrice111 / rangeInput111[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput111.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal111 = parseInt(rangeInput111[0].value),
        maxVal111 = parseInt(rangeInput111[1].value);
        if((maxVal111 - minVal111) < priceGap111){
            if(e.target.className === "range-min"){
                rangeInput111[0].value = maxVal111 - priceGap111
            }else{
                rangeInput111[1].value = minVal111 + priceGap111;
            }
        }else{
            priceInput111[0].value = minVal111;
            priceInput111[1].value = maxVal111;
            range111.style.left = ((minVal111 / rangeInput111[0].max) * 100) + "%";
            range111.style.right = 100 - (maxVal111 / rangeInput111[1].max) * 100 + "%";
        }
    });
});

//Slider khoảng thời gian min
const rangeInput222 = document.querySelectorAll(".range-input-desktop1 input"),
priceInput222 = document.querySelectorAll(".price-input-desktop1 input"),
range222 = document.querySelector(".slider-desktop1 .progress1");
let priceGap222 = 5;
priceInput222.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice222 = parseInt(priceInput222[0].value),
        maxPrice222 = parseInt(priceInput222[1].value);
        
        if((maxPrice222 - minPrice222 >= priceGap222) && maxPrice222 <= rangeInput222[1].max){
            if(e.target.className === "input-min1"){
                rangeInput222[0].value = minPrice222;
                range222.style.left = ((minPrice222 / rangeInput222[0].max) * 100) + "%";
            }else{
                rangeInput222[1].value = maxPrice222;
                range222.style.right = 100 - (maxPrice222 / rangeInput222[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput222.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal222 = parseInt(rangeInput222[0].value),
        maxVal222 = parseInt(rangeInput222[1].value);
        if((maxVal222 - minVal222) < priceGap222){
            if(e.target.className === "range-min1"){
                rangeInput222[0].value = maxVal222 - priceGap222
            }else{
                rangeInput222[1].value = minVal222 + priceGap222;
            }
        }else{
            priceInput222[0].value = minVal222;
            priceInput222[1].value = maxVal222;
            range222.style.left = ((minVal222 / rangeInput222[0].max) * 100) + "%";
            range222.style.right = 100 - (maxVal222 / rangeInput222[1].max) * 100 + "%";
        }
    });
});

// //Slider khoảng thời gian max
const rangeInput333 = document.querySelectorAll(".range-input-desktop2 input"),
priceInput333 = document.querySelectorAll(".price-input-desktop2 input"),
range333 = document.querySelector(".slider-desktop2 .progress2");
let priceGap333 = 5;
priceInput333.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice333 = parseInt(priceInput333[0].value),
        maxPrice333 = parseInt(priceInput333[1].value);
        
        if((maxPrice333 - minPrice333 >= priceGap333) && maxPrice333 <= rangeInput333[1].max){
            if(e.target.className === "input-min2"){
                rangeInput333[0].value = minPrice333;
                range333.style.left = ((minPrice333 / rangeInput333[0].max) * 100) + "%";
            }else{
                rangeInput333[1].value = maxPrice333;
                range333.style.right = 100 - (maxPrice333 / rangeInput333[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput333.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal333= parseInt(rangeInput333[0].value),
        maxVal333 = parseInt(rangeInput333[1].value);
        if((maxVal333 - minVal333) < priceGap333){
            if(e.target.className === "range-min2"){
                rangeInput333[0].value = maxVal333 - priceGap333
            }else{
                rangeInput333[1].value = minVal333 + priceGap333;
            }
        }else{
            priceInput333[0].value = minVal333;
            priceInput333[1].value = maxVal333;
            range333.style.left = ((minVal333 / rangeInput333[0].max) * 100) + "%";
            range333.style.right = 100 - (maxVal333 / rangeInput333[1].max) * 100 + "%";
        }
    });
});

// //Slider khoảng tuổi
const rangeInput444 = document.querySelectorAll(".range-input-desktop3 input"),
priceInput444 = document.querySelectorAll(".price-input-desktop3 input"),
range444 = document.querySelector(".slider-desktop3 .progress3");
let priceGap444 = 1;
priceInput444.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice444 = parseInt(priceInput444[0].value),
        maxPrice444 = parseInt(priceInput444[1].value);
        
        if((maxPrice444 - minPrice444 >= priceGap444) && maxPrice444 <= rangeInput444[1].max){
            if(e.target.className === "input-min3"){
                rangeInput444[0].value = minPrice444;
                range444.style.left = ((minPrice444 / rangeInput444[0].max) * 100) + "%";
            }else{
                rangeInput444[1].value = maxPrice444;
                range444.style.right = 100 - (maxPrice444 / rangeInput444[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput444.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal444= parseInt(rangeInput444[0].value),
        maxVal444 = parseInt(rangeInput444[1].value);
        if((maxVal444 - minVal444) < priceGap444){
            if(e.target.className === "range-min3"){
                rangeInput444[0].value = maxVal444 - priceGap444
            }else{
                rangeInput444[1].value = minVal444 + priceGap444;
            }
        }else{
            priceInput444[0].value = minVal444;
            priceInput444[1].value = maxVal444;
            range444.style.left = ((minVal444 / rangeInput444[0].max) * 100) + "%";
            range444.style.right = 100 - (maxVal444 / rangeInput444[1].max) * 100 + "%";
        }
    });
});
