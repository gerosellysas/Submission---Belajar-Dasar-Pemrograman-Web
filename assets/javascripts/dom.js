const navbar = document.getElementById('navbar');
let currentHash = '';

window.onscroll = () => {
    if (window.outerWidth >= 513) {
        if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
            navbar.style.position = 'absolute';

        }
        if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
            navbar.style.width = '100%';
            navbar.style.backgroundColor = 'black';
            navbar.style.position = 'fixed';
        } else {
            navbar.style.width = '80%';
            navbar.style.backgroundColor = 'transparent';
        }
    } else {
        if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
            navbar.style.width = '100%';
            navbar.style.position = 'absolute';
        }
        if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
            navbar.style.width = '100%';
            navbar.style.position = 'fixed';
        }
    }
    if (window.location.hash === '#slide-image') {
        navItems[1].className = 'nav-item active';
        navItems[2].className = 'nav-item';
        navItems[3].className = 'nav-item';
        navItems[4].className = 'nav-item';
    };
    if (window.location.hash === '#about-us') {
        navItems[1].className = 'nav-item';
        navItems[2].className = 'nav-item active';
        navItems[3].className = 'nav-item';
        navItems[4].className = 'nav-item';
    }
    if (window.location.hash === '#menu-list') {
        navItems[1].className = 'nav-item';
        navItems[2].className = 'nav-item';
        navItems[3].className = 'nav-item active';
        navItems[4].className = 'nav-item';
    }
    if (window.location.hash === '#contact') {
        navItems[1].className = 'nav-item';
        navItems[2].className = 'nav-item';
        navItems[3].className = 'nav-item';
        navItems[4].className = 'nav-item active';
    }
};

const navList = document.getElementById('nav-list');
function showNavbar() {
    if (navList.className === '') {
        navbar.style.flexDirection = 'column';
        navbar.style.alignItems = 'flex-start';
        navbar.style.justifyContent = 'center';
        navList.style.display = 'block';
        navList.className += 'mobile-nav';
    } else {
        navbar.style.flexDirection = 'row';
        navbar.style.alignItems = 'center';
        navbar.style.justifyContent = 'space-between';
        navList.style.display = 'none';
        navList.className = '';
    }
}

const navItems = document.querySelectorAll('.nav-item');

function getActiveNavbar(href) {
    switch (href) {
        case '#about-us':
            navItems[1].className = 'nav-item';
            navItems[2].className = 'nav-item active';
            navItems[3].className = 'nav-item';
            navItems[4].className = 'nav-item';
            break;
        case '#menu-list':
            navItems[1].className = 'nav-item';
            navItems[2].className = 'nav-item';
            navItems[3].className = 'nav-item  active';
            navItems[4].className = 'nav-item';
            break;
        case '#contact':
            navItems[1].className = 'nav-item';
            navItems[2].className = 'nav-item';
            navItems[3].className = 'nav-item';
            navItems[4].className = 'nav-item active';
            break;
        default:
            navItems[1].className = 'nav-item active';
            navItems[2].className = 'nav-item';
            navItems[3].className = 'nav-item';
            navItems[4].className = 'nav-item';
    }
}

function changeActive() {
    for (const navItem of navItems) {
        navItem.addEventListener('click', function (event) {
            let target = event.currentTarget;
            getActiveNavbar(target.getAttribute('href'));
        });
    }
}

let slideImages = ['assets/images/slide-1.jpg', 'assets/images/slide-2.jpg', 'assets/images/slide-3.jpg', 'assets/images/slide-4.jpg'];

let slideImagesIndex = 0;
const slideImg = document.querySelector('#slide-image');
const slideTextSubHeading = document.querySelector('#slide-text-subheading');
const slideTextHeading = document.querySelector('#slide-text-heading');

function changeSlideText() {
    switch (slideImagesIndex) {
        case 1:
            slideTextSubHeading.innerText = 'Mie Buatan Sendiri';
            slideTextHeading.innerText = 'Lebih sehat, tanpa bahan pengawet';
            break;
        case 2:
            slideTextSubHeading.innerText = 'Pesen Gak Pakai Ribet';
            slideTextHeading.innerText = 'Makan kapan saja, dimana saja';
            break;
        case 3:
            slideTextSubHeading.innerText = 'Kelezatan Yang Menggoda';
            slideTextHeading.innerText = 'Ultraman pun juga makan disini';
            break;
        default:
            slideTextSubHeading.innerText = 'Mie Ayam Ora Patek Enak';
            slideTextHeading.innerText = 'Konsisten menjaga rasa, sejak 1995';
    }
}

function autoSlideImages() {
    slideImg.setAttribute('src', slideImages[slideImagesIndex]);
    changeSlideText();
    slideImagesIndex > 2 ? slideImagesIndex = 0 : slideImagesIndex++;

}

window.onload = function () {
    setInterval(autoSlideImages, 5000);
    changeBgImage();
};

const aboutUsBg = document.getElementById('about-us-bg');

function changeBgImage() {
    if (window.outerWidth >= 513) {
        aboutUsBg.setAttribute('src', 'assets/images/about-us-bg.jpg');
    } else {
        aboutUsBg.setAttribute('src', 'assets/images/about-us-bg-vertical.jpg');
    }
}

const aboutUsImg = document.querySelector('#about-us-image');

function onHover() {
    aboutUsImg.setAttribute('src', 'assets/images/warung-2022.jpg');
    aboutUsImg.style.objectPosition = 'top';
}

function onUnhover() {
    aboutUsImg.setAttribute('src', 'assets/images/warung-1995.jpg');
    aboutUsImg.style.objectPosition = 'center';
}

const orderDisplay = {
    displayNumber: ['0', '0', '0', '0', '0', '0'],
}

const minButtons = document.querySelectorAll('.button-min');
const plusButtons = document.querySelectorAll('.button-plus');
const menuIndexs = document.querySelectorAll('.order-display');

function updateDisplay(index) {
    menuIndexs[index].innerText = orderDisplay.displayNumber[index];
}

function removeOrder(index) {
    let result = 0;
    result = parseInt(orderDisplay.displayNumber[index]) - 1;
    if (result < 0) {
        alert('Order dulu bro !');
    } else {
        orderDisplay.displayNumber[index] = result;
    }
}

function addOrder(index) {
    let result = 0;
    result = parseInt(orderDisplay.displayNumber[index]) + 1;
    orderDisplay.displayNumber[index] = result;
}

for (const [i, minButton] of minButtons.entries()) {
    minButton.addEventListener('click', function (event) {
        const target = event.currentTarget;
        if (target.classList.contains('button-min')) {
            removeOrder(i);
            updateDisplay(i);
        }
        updateDisplay(i);
    });
}

for (const [i, plusButton] of plusButtons.entries()) {
    plusButton.addEventListener('click', function (event) {
        const target = event.currentTarget;
        console.log(target.classList);
        if (target.classList.contains('button-plus')) {
            addOrder(i);
            updateDisplay(i);
        }
        updateDisplay(i);
    });
}