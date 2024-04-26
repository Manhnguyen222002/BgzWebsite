// Lấy và đổ dữ liệu header chưa login
const headerbegin = document.querySelector('.header-begin')
fetch('/header-begin.html')
.then(res=>res.text())
.then(data=>{
    headerbegin.innerHTML=data
})

//Lấy và đổ dữ liệu footer
const footer = document.querySelector('.footer');

fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})
