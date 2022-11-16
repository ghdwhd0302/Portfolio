// 문법을 엄격하게 사용하겠다
// 변수를 제대로 사용하지 않는다면 에러 발생
'use strict';

// <스크롤에 따른 메뉴바 색상 처리>

const navbar = document.querySelector('#navbar');

// 사각형의 높이를 가져와라
const navbarHeight = navbar.getBoundingClientRect().height;
console.log(navbarHeight);

document.addEventListener('scroll', () => {
    // console.log('이벤트가 발생되었음!');

    // // 스크롤의 위치를 알수있음
    // console.log(window.scrollY);

    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--bold');
    } else {
        navbar.classList.remove('navbar--bold');
    }

});

// <스크롤에 따른 메뉴바 고정>
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (e) => {
    // console.log(e);
    const target = e.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    // console.log(link);
    scrollIntoView(link);
})

// contack 버튼
const homeContactBtn = document.querySelector('.home__contact');

homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}


