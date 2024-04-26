const fuiInputPassword3 = document.querySelector('.fui-input-password #passW')
const fuiInputIconOn3 = document.querySelector('.fui-input-password .eye-on')
const fuiInputIconOff3 = document.querySelector('.fui-input-password .eye-off')

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
        errorPass.innerHTML = "Mật khẩu không hợp lệ!";
    }          
    else{
		errorPass.innerHTML = "";
	}
}
var passInput = document.getElementById('passW');
var emailInput = document.getElementById('email');

function logIn(){
    
      
        var emailValue = emailInput.value;
        var passValue = passInput.value;
        
      
        if (emailValue == '' || passValue == '' ) {
          alert('Vui lòng nhập đầy đủ thông tin!');
          if (emailValue == '') {
            emailInput.focus();
          } else if (passValue == '') {
            passInput.value.focus();
          } return false
        }
        window.location.href= "./index.html"
        return true;
      
}
function preventSubmit(){
    event.preventDefault();
  }