window.addEventListener("DOMContentLoaded", function(){
let menuLi=document.querySelectorAll("#menu li");
let header=document.getElementById("header");
let headerTitle=header.firstElementChild;
let headerIcons=header.lastElementChild.firstElementChild.children;
let [searchBtn, notificationBtn]=headerIcons;
let main=document.getElementById("main");
let search=document.getElementById("search");
let recentMoreBtn=document.querySelector("#search .view .more");
let recentView=document.getElementById("view");

if('serviceWorker' in navigator){
    try {
    navigator.serviceWorker.register('serviceWorker.js');
    console.log("Service Worker Registered");
    } catch (error) {
    console.log("Service Worker Registration Failed");
    }
}

searchBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(!e.currentTarget.classList.contains("active")){
        e.currentTarget.classList.add("active");
        main.style.display="none";
        search.classList.add("active");
        headerTitle.innerText="레시피 검색";

    }
    else {
        if(recentView.classList.contains("active")){
            recentView.classList.remove("active");
            search.classList.add("active");
            header.classList.remove("sub");
            headerTitle.innerText="레시피 검색";
            notificationBtn.style.display="block";
        }
        else{
        e.currentTarget.classList.remove("active");
        main.style.display="block";
        search.classList.remove("active");
        headerTitle.innerText="만개의레시피";
        }
    }
});

recentMoreBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(!recentView.classList.contains("active")){
    recentView.classList.add("active");
    header.classList.add("sub");
    headerTitle.innerText="최근에 본 레시피";
    notificationBtn.style.display="none";
    search.classList.remove("active");
    }
});

menuLi[0].classList.add("active");

for (let i=0; i<menuLi.length; i++){
    menuLi[i].addEventListener("click", function(e){
        e.preventDefault();
        for(let j=0; j<menuLi.length; j++){
            if(i===j){
                menuLi[j].classList.add("active");
            }
            else{
                menuLi[j].classList.remove("active");
            }
        }
    });
}


const recommendSwiper = new Swiper(".recommendSwiper", {
    slidesPerView: 2.5,
    spaceBetween: 15,

    breakpoints: {
        460: {
            slidesPerView: 3.5,
        },
        720: {
            slidesPerView: 4.5,
        },
    },
});


const bannerSwiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
    el: ".swiper-pagination",
},
});

const dealsSwiper = new Swiper(".dealsSwiper", {
slidesPerView: 2.5,
spaceBetween: 15,
breakpoints: {
    460: {
        slidesPerView: 3.5,
    },
    720: {
        slidesPerView: 4.5,
    },
},
});

const bestSwiper = new Swiper(".bestSwiper", {
slidesPerView: 2.5,
spaceBetween: 15,
breakpoints: {
    460: {
        slidesPerView: 3.5,
    },
    720: {
        slidesPerView: 4.5,
    },
},
});

const magazineSwiper = new Swiper(".magazineSwiper", {
slidesPerView: 2.5,
spaceBetween: 15,
breakpoints: {
    460: {
        slidesPerView: 3.5,
    },
    720: {
        slidesPerView: 4.5,
    },
},
});

});