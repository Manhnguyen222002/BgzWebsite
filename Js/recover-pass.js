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

const nextPageBtn = document.querySelector('submit');


function submitClick(){
    window.location.href= "./index.html";
  }