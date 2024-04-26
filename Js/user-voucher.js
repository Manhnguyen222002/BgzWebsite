var modal = document.querySelector('.modal')
var btnMore = document.querySelector('.btn-more')
var btnClose = document.querySelector('.modal-header i')
var btnCopy = document.querySelector('.btn-copy')

function ToggleModal(e){
  console.log(e.target);
  modal.classList.toggle('hide')
}

btnMore.addEventListener('click',ToggleModal)

btnClose.addEventListener('click',ToggleModal)

const codeText = document.getElementById("code-text");

btnCopy.addEventListener("click", function () {
  // Copy mã "BGZ123" vào clipboard
  navigator.clipboard.writeText("BGZ30359456");

  // Hiển thị thông báo
  
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
    title: "Copy mã thành công!",
    message: "Mã khuyến mãi đã được lưu lại.",
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