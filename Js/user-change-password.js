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
      title: "Đổi mật khẩu thành công!",
      message: "Mật khẩu của bạn đã được thay đổi.",
      type: "success",
      duration: 5000
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

  const fuiInputPassword = document.querySelector('.fui-input-password #old-password')
  const fuiInputIconOn = document.querySelector('.fui-input-password .eye-on')
  const fuiInputIconOff = document.querySelector('.fui-input-password .eye-off')
  
  fuiInputIconOn.addEventListener('click', () => {
      fuiInputPassword.setAttribute('type', 'text')
      fuiInputIconOn.classList.add('hidden')
      fuiInputIconOff.classList.add('active')
  
  })
  
  fuiInputIconOff.addEventListener('click', () => {
      fuiInputPassword.setAttribute('type', 'password')
      fuiInputIconOn.classList.remove('hidden')
      fuiInputIconOff.classList.remove('active')
  })
  
  const fuiInputPassword2 = document.querySelector('.fui-input-password2 #passW')
  const fuiInputIconOn2 = document.querySelector('.fui-input-password2 .eye-on2')
  const fuiInputIconOff2 = document.querySelector('.fui-input-password2 .eye-off2')
  
  fuiInputIconOn2.addEventListener('click', () => {
      fuiInputPassword2.setAttribute('type', 'text')
      fuiInputIconOn2.classList.add('hidden')
      fuiInputIconOff2.classList.add('active')
  
  })
  
  fuiInputIconOff2.addEventListener('click', () => {
      fuiInputPassword2.setAttribute('type', 'password')
      fuiInputIconOn2.classList.remove('hidden')
      fuiInputIconOff2.classList.remove('active')
  })
  const fuiInputPassword3 = document.querySelector('.fui-input-password3 #conPass')
  const fuiInputIconOn3 = document.querySelector('.fui-input-password3 .eye-on3')
  const fuiInputIconOff3 = document.querySelector('.fui-input-password3 .eye-off3')
  
  fuiInputIconOn3.addEventListener('click', () => {
      fuiInputPassword3.setAttribute('type', 'text')
      fuiInputIconOn3.classList.add('hidden')
      fuiInputIconOff3.classList.add('active')
  
  })
  
  fuiInputIconOff3.addEventListener('click', () => {
      fuiInputPassword3.setAttribute('type', 'password')
      fuiInputIconOn3.classList.remove('hidden')
      fuiInputIconOff3.classList.remove('active')
  })
  
  function checkOldPassword(){
    var passW = document.getElementById('old-password').value;
  var errorPass = document.getElementById('error-pass2');

  if (passW == '' || passW == null) {
    errorPass.innerHTML = "Mật khẩu vui lòng không để trống!";
  } else if (passW.length < 8){
        errorPass.innerHTML = "Mật khẩu không được dưới 8 ký tự!";
    }  
    else if (passW !='12345678'){
      errorPass.innerHTML = "Mật khẩu nhập vào không đúng!";
  }          
    else{
    errorPass.innerHTML = "";
  }
}
  
  function checkPassword(){
      var passW = document.getElementById('passW').value;
    var errorPass = document.getElementById('error-pass');
  
    if (passW == '' || passW == null) {
      errorPass.innerHTML = "Mật khẩu vui lòng không để trống!";
    } else if (passW.length < 8){
          errorPass.innerHTML = "Mật khẩu không được dưới 8 ký tự!";
      }  else if (passW =='12345678'){
        errorPass.innerHTML = "Vui lòng nhập mật khẩu khác với mật khẩu cũ!";
    }          
      else{
      errorPass.innerHTML = "";
    }
  }
  
  function checkConfirmPassword(){
      var passW = document.getElementById('passW').value;
      var ConPass = document.getElementById('conPass').value;
    var errorConPass = document.getElementById('error-confirm');
  
    if (ConPass == '' || ConPass == null) {
      errorConPass.innerHTML = "Mật khẩu nhập lại vui lòng không để trống!";
    }else if(ConPass != passW){
      errorConPass.innerHTML ="Mật khẩu không trùng khớp với mật khẩu vừa nhập!";
    }else{
      errorConPass.innerHTML = "";
    }
  }
  
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var passInput = document.getElementById('passW');
  var confirmInput = document.getElementById('conPass');
  function signUp(){
      
          var nameValue = nameInput.value;
          var emailValue = emailInput.value;
          var passValue = passInput.value;
          var confirmValue = confirmInput.value;
        
          if (nameValue == '' || emailValue == '' || passValue == '' || confirmInput =='') {
            alert('Vui lòng nhập đầy đủ thông tin!');
            if (nameValue == '') {
              nameInput.focus();
            } else if (emailValue == '') {
              emailInput.focus();
            } else if (passValue == '') {
              assInput.value.focus();
            } else if (confirmValue == '') {
              confirmInput.focus();
            } 
            return false;
          }
          window.location.href= "./log-in.html"
          return true;
        
  }
  function preventSubmit(){
      event.preventDefault();
    }

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