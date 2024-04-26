// //Slider ảnh
// const imgs = document.querySelectorAll('.img-select a');
// const imgBtns = [...imgs];
// let imgId = 1;

// imgBtns.forEach((imgItem) => {
//     imgItem.addEventListener('click', (event) => {
//         event.preventDefault();
//         imgId = imgItem.dataset.id;
//         slideImage();
//     });
// });

// function slideImage(){
//     const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

//     document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
// }

// window.addEventListener('resize', slideImage);

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

const btnPrev = document.querySelector('.btn-prev11'); 
const btnNext = document.querySelector('.btn-next11'); 
const btnPrev1 = document.querySelector('.btn-prev-mobile'); 
const btnNext1 = document.querySelector('.btn-next-mobile'); 
imgBtns.forEach((imgItem) => {
  imgItem.addEventListener('click', (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage(){
  const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
  document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}


btnPrev.addEventListener('click', () => {
  imgId--;
  if (imgId < 1) {
    imgId = imgs.length;
  }
  slideImage();
});

btnNext.addEventListener('click', () => {
  imgId++;
  if (imgId > imgs.length) {
    imgId = 1; 
  }
  slideImage();
});

btnPrev1.addEventListener('click', () => {
  imgId--;
  if (imgId < 1) {
    imgId = imgs.length;
  }
  slideImage();
});

btnNext1.addEventListener('click', () => {
  imgId++;
  if (imgId > imgs.length) {
    imgId = 1; 
  }
  slideImage();
});

window.addEventListener('resize', slideImage);
//Nút tăng giảm số lượng
const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");
    let a = 1;
    plus.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ?  + a : a;
      num.innerText = a;
    });
    minus.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ?  + a : a;
        num.innerText = a;
      }
    });

//Nút fav
var btnfav = document.getElementById('btnh1');
function Toggle(){
    if (btnfav.style.color == "var(--primary)"){
        btnfav.style.color = "var(--grayD9)"
    } else {
        btnfav.style.color ="var(--primary)"
    }
}

//Nút fav
var btnfav1 = document.getElementById('btnh12');
function Toggle1(){
    if (btnfav1.style.color == "var(--primary)"){
        btnfav1.style.color = "var(--grayD9)"
    } else {
        btnfav1.style.color ="var(--primary)"
    }
}


//Đánh giá sản phẩm
 const stars = document.querySelectorAll(".stars i");
 stars.forEach((star, index1) => {
   star.addEventListener("click", () => {
     stars.forEach((star, index2) => {
       index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
     });
   });
 });

//Hiện viết đánh giá
var modal = document.querySelector('.modal')
var btnMore = document.querySelector('.btn-review1')
var btnClose = document.querySelector('.modal-header i')
var btnCopy = document.querySelector('.btn-copy')

function ToggleModal(e){
  console.log(e.target);
  modal.classList.toggle('hide')
}

btnMore.addEventListener('click',ToggleModal)

btnClose.addEventListener('click',ToggleModal)
