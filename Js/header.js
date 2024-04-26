
onload=()=>{
const searchBar11 = document.querySelector('.header-search')
const searchBar12 = document.querySelector('.mobile-icon-search')
const div11 = document.querySelector('.search-list')
const div22 = document.querySelector('.content-area')
const div111 = document.querySelector('.search-list1')
const div222 = document.querySelector('.content-area1')
const suggestItem11 = document.querySelector('.search-suggest-item')
const suggestItem12 = document.querySelector('.search-suggest-item1')
const backdrop = document.querySelector('.backdrop')

//desktop
  searchBar11.addEventListener('click', () => {
    div11.style.display = 'block'
    
  });

  suggestItem11.addEventListener('click', (e) => {
    e.stopPropagation();
    div11.style.display = 'none'
    div22.style.display = 'block'
    const inputValue = suggestItem11.textContent;
    searchBar11.querySelector('.header-search input').value = inputValue;
  });
  
  
  div22.onmouseleave = function(){
    document.body.onclick = function(){
      div11.style.display = 'none';
      div22.style.display = 'none';
      searchBar11.querySelector('.header-search input').value = "";
      document.body.onclick = null;
    }
  }
  
  searchBar11.querySelector('input').addEventListener('input', (e) => {
    const inputValue = e.target.value.trim();
    if (inputValue.toLowerCase() === 'mèo nổ') {
      div11.style.display = 'none';
      div22.style.display = 'block';
    } else {
      div11.style.display = 'block';
      div22.style.display = 'none';
    }
  });
 
  
  //mobile
  searchBar12.addEventListener('click', () => {
    div111.style.display = 'block'
    backdrop.classList.add('show')
  });
  suggestItem12.addEventListener('click', (e) => {
    e.stopPropagation();
    div111.style.display = 'none'
    div222.style.display = 'block'
    
    
  });
  

const btnNoti = document.querySelector('.mobile-noti')
const btnCloseNoti = document.querySelector('.noti-title .btn-close-noti')
const dropdownNoti = document.querySelector('.noti-dropdown1')

btnNoti.addEventListener('click', openNoti)
btnCloseNoti.addEventListener('click', closeNoti)

function openNoti(){
  dropdownNoti.style.display = 'block'
  backdrop.classList.add('show')
}
function closeNoti(e){
  e.stopPropagation();
  dropdownNoti.style.display = 'none'
  backdrop.classList.remove('show')
}

//dropdown nav category
const optionMenu11 = document.querySelector(".nav-category")
const selectBtn11 = optionMenu11.querySelector(".nav-category .nav-header")
const options11 = optionMenu11.querySelectorAll(".nav-category .radio-item")
const sBtn_text11 = optionMenu11.querySelector(".nav-category .nav-title");
selectBtn11.addEventListener("click", () => optionMenu11.classList.toggle("active"));       
options11.forEach(option11 =>{
    option11.addEventListener("click", ()=>{
        let selectedOption11 = option11.querySelector(".option-text").innerText;
        sBtn_text11.innerText = selectedOption11;
        optionMenu11.classList.remove("active");
    });
});
//dropdown nav genre
const optionMenu22 = document.querySelector(".nav-genre"),
       selectBtn22 = optionMenu22.querySelector(".nav-genre .nav-header"),
       options22 = optionMenu22.querySelectorAll(".nav-genre .radio-item"),
       sBtn_text22 = optionMenu22.querySelector(".nav-genre .nav-title");
selectBtn22.addEventListener("click", () => optionMenu22.classList.toggle("active"));       
options22.forEach(option22 =>{
    option22.addEventListener("click", ()=>{
        let selectedOption22 = option22.querySelector(".option-text").innerText;
        sBtn_text22.innerText = selectedOption22;
        optionMenu22.classList.remove("active");
    });
});
//dropdown nav about us
const optionMenu33 = document.querySelector(".nav-about-us"),
       selectBtn33 = optionMenu33.querySelector(".nav-about-us .nav-header"),
       options33 = optionMenu33.querySelectorAll(".nav-about-us .radio-item"),
       sBtn_text33 = optionMenu33.querySelector(".nav-about-us .nav-title");
selectBtn33.addEventListener("click", () => optionMenu33.classList.toggle("active"));       
options33.forEach(option33 =>{
    option33.addEventListener("click", ()=>{
        let selectedOption33 = option33.querySelector(".option-text").innerText;
        sBtn_text33.innerText = selectedOption33;
        optionMenu33.classList.remove("active");
    });
});

const btnOpenNav = document.querySelector('.btn-side-nav')
const btnCloseNav = document.querySelector('.nav-close')
const sideNav = document.querySelector('.side-nav')
const backdrop1 = document.querySelector('.backdrop1')
btnOpenNav.addEventListener('click',openNav)
btnCloseNav.addEventListener('click',closeNav)

function openNav(){
  sideNav.classList.add('open')
  backdrop1.classList.add('show')
}

function closeNav(){
  sideNav.classList.remove('open')
  backdrop1.classList.remove('show')
}



}










// const searchBar = document.querySelector('.header-search')
// const div1 = document.querySelector('.search-list')
// const div2 = document.querySelector('.content-area')
// const suggestItem = document.querySelector('.search-suggest-item')

// div2.style.display = "block"
// console.log(div2);