//Lấy và đổ dữ liệu header

const header = document.querySelector('.header')
fetch('/header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data
    
})

//Lấy và đổ dữ liệu footer
const footer = document.querySelector('.footer');

fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})

//Thay ảnh đại diện (User-Info)
function loadFile(event) {
    var reader = new FileReader();
    reader.onload = function() {
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }














