const fuiInputPassword = document.querySelector('.fui-input-password #passW')
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

const fuiInputPassword2 = document.querySelector('.fui-input-password2 #conPass')
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

function checkName(){
    var name = document.getElementById('name').value 
    var errorName = document.getElementById('error-name')
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

    if (name == '' || name == null){
        errorName.innerHTML="Họ và tên không được để trống";
    } else if (!regexName.test(name)){
        errorName.innerHTML="Họ và tên không hợp lệ";
        return false;
    } else {
        errorName.innerHTML="";
    }
}

function checkEmail(){
    var email = document.getElementById('email').value;
    var errorEmail = document.getElementById('error-email');
	var reGexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

    if (email == '' || email == null) {
        errorEmail.innerHTML = "Email không được để trống!";
    
    }else if(!reGexEmail.test(email)){
        errorEmail.innerHTML = "Email không hợp lệ!";
        email = '';
    }else{
        errorEmail.innerHTML = '';
    }
}

function checkPassword(){
    var passW = document.getElementById('passW').value;
	var errorPass = document.getElementById('error-pass');

	if (passW == '' || passW == null) {
		errorPass.innerHTML = "Mật khẩu vui lòng không để trống!";
	} else if (passW.length < 8){
        errorPass.innerHTML = "Mật khẩu không được dưới 8 ký tự!";
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
		errorConPass.innerHTML ="Mật khẩu nhập lại không trùng khớp với mật khẩu trên!";
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