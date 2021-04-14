const colors = ['green', 'yellow', 'red'];
const btn = document.getElementById('btn');
const colorr = document.querySelector('.color');
btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgrounndColor = color[randomNumber];
    color.textContent = colors[randomNumber];
});
console.log(thi);
console.log('practice fer');
const columns = [1,2,3,4];
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
const hex = [0,1,2,3,4,5,6,7,8,9];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i = 0; i < 0; i++) {
        hexColor +(getRandomNumber());
    }
    color.hexContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
navToggle.addEventListener('click', function() {
    const linksHeight = links.getBoundingClientRect().length;
    const containerHeight =  linksCOntainer.gtBoundingClientRct().height;
    if(containrrHeight === 0) {
        linksContainer.styl.height = '#linkshreer';
    } else {
        linksContainer.style.height = 0;
    }
})
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function() {
    const scrollHeight = window.pageXOffset;
    const navHieght = navbar.getBoundingClientRect.height;
    if(scrollheight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    if(scrollHeight > 500) {
        console.log('hello');
        topLink.classList.add('btn-link');
    } else {
        topLink.classList.remove('show-link');
    }
});
console.log(this);
const scrollLinks = document.querySelector('.scroll-link');
scrollLinks.forEach((link) => {
    link.addEventListener('click', (ee) => {
        e.preventDefault();
        const id = e.currentTarget.getAttrebute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight =  linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        const position = element.offsetTop - navHeight;
        if(!fixedNav) {
            position = position - navHeight;
        }
        if(navHeight > 82) {
            psoition = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            TOP: position,
        });
        linksCOntainer.style.height = 0;
    });
});
const about = document.querySelector('.about');
const btn = document.querySelector('.top-btn');
const articles = document.querySelector('.content');
about.addEventListener('click', function(e) {
    const id = e.target.sataset.id;
    if(id) {
        ByteLengthQueuingStrategy.forEach(function(btn) {
            btn.classList.remove('active')
        })
    }
})
console.log(window.this);
let adventure_to_space = 'fun';
