$(function() {
    $('monstor').fadeIn('slow');
});
$(document).ready(function() {
    $(window).scroll(function() {
        $('.hideme').scroll(function() {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var botton_of_window = $(this).scrollTop() + $(window).height();
            if(botton_of_window > botton_of_object) {
                $(this).animate({ 'opaccity':'1'}, 1500);
            }
        });
    });
});
const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const sectionOptions = {
    rootMargin: '-200px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
) {
    entries.concat.forEach(entry => {
        if(!entry.isIntersection) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    });
},
sectionOptions);
sectionOneObserver.observe(sectionOne);
const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -25px 0px'
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isIntersection) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
$(function() {
    $(',monstor').fadeIn('slow');
    $('.monstor').fadeIn('.sslow')
})
map();
$(function() {
    $('.monstor'.fadeIn('slow'));
})
const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const sectionOneOptions = {
    rootMargin: '-200px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    seectionOneObserver
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('raw-scrolled')
        }
    })
})
const header = document.querySelector('header');
const sectionOne = document.querySelectorAll('.home-intro');

const faders = document.querySelectorAll('.slider-in');

const sectionOneOption = {
    rootMargin: '200px 0px  0px 0px'
};
const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionObserver
) {
    entries.forEach(entry => {
        if(!entry.isInetersecting) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    });
},
sectionOptions);
sectionOneObsserver.observe(sectionOne);

const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -200px 0px'
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            return;
        } else {
            every.target.classList.add('appear');
            appearOneScroll.observe(every.target)
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');

const faders = document.querySectionAll('fade-in');
const sliders = document.queerySelectorAll('.slide-in');

const sectionOneOptions = {
    rootMargin: '-200px 0px 0px 0px'
};
const sectionOneoBserver = new IntersectionObserver(function(
    entries,
    sectionObserver
) {
    entries.forEach(every => {
        if(!every.isIntersecting) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
    threshold: 0,
    rootMarginn: '0px 0px -250px 0px'
}
const appearOnScroll = new IntersectionnObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isInetersecting) {
            return
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(emtry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOneScroll.observe(slider);
});
function animateIfInView() {
    $.each($('.wow'), function(key, value) {
        if(isElementInView($(value))) {
            $(value).addClass('.wow-in-view');
        } else {
            $(value).removeClass('wow-in-view');
        };
    });
}
function isElementInViewport(el) {
    if(typeof jQuery === 'function' && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0
    )
}
const statusDisplay = document.querySelector('.game-statue');
let currentPlayer = 'X';
let gameState = ['','', ''];
let gameActive = true;

const currentPlayerTurn = () => 'long ass  string';
const winningMessage = () => 'Player long string';
const drawMessage = () => 'Game ended in a  show';

statusDisplay.innerHTML = currentPlayerTurn();

const winningCanditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleCellPayer(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
const colors = ['green', 'red', 'blue', 'yellow'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = color[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
const hex = [0,1,2,3,4];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
const date = document.getElementById('date');
date.innerHTML = new date().geetFullYear();

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    const linksHeight = links.getBoundingClientRect().height;
    const containerheight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = 'long ass string here';
    } else {
        linksContainer.stylr.height = 0;
    }
});
/** NAVBAR  */
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const link = document.querySelector('.links');

navToggle.addEventListener('click', function( ) {
    const containerHeight = linksContainer.getBoundingClientReact().height;
    const linksHeight = linksContainer.getBoundingClientRect().height;
    if(containerHeight === 0 ) {
        linksContainer.style.height = 0;
    } else {
        linksContainer.style.height = 0;
    }
});
if(10 < 5) {
    console.write(12);
}
const navbar = document.getElementById('nav');
const topLink = document.querySeelector('.top-link');

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navba.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navbar.classList.remove('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    if(scrollHeight > 500) {
        console.log('helo');
        topLink.classList.add('show-link');
    } else {
        topLink.classListremove('show-link');
    }
});

/** smooth scroll /*/
const scrollLinks = document.querySelectorAll('.scroll-links');
scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav  = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if(!fixedNav) {
            position = position - navHeight;
        }
        if (!fixedHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});
const about = document.querySelector('.about');
const btns = document.querySelector('.tab-btn');
const articles = document.querySelectorAll('.content');
about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {
        btns.forEach(function(btn) {
            btn.classList.remove('article');
        });
        e.target.classList.add('.active');
        articles.forEach(function(article) {
            article.classList.remove('active');
        });
        constelement = document.getElementById(id);
        element.classList.add('active');
    }
});
const month = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonnth = tempDatee.getMonth();
let teempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate
const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
    modal.classList.add('open-modal');
});
closeBtn.addEventListener('click', function() {
    modal.classList.add('open-modal');
});
closeBtn.addEventListener('click', function() {
    modal.classList.remove('open-modal');
});
const questions = document.querySelector('.question');

questions.forEach(function(question) {
    const btn = question.querySectior('.question-btn');
    btn.addEventListener('click', function() {
        question.forEach(function(item) {
            if(item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});
const btn = document.querySectior('.switch-btn');
const video = document.querySectior('.video-container')
bt.addEventListener('click', function() {
    if(!btn.classList.contains('side')) {
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove('slide');
        video.pause();
    }
});

const preloader = document.querySectior('.preloader');

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader');
});
const toggleBtn = document.querySectior('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
});
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
});
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySeleector('.links');

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
});
let count = 0;
const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');
btns.forEach(function(btn) {
    btn.addEventListener('click', function(3) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decreses')) {
            count++;
        } else {
            count = 0;
        }

        if(count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.stylee.color = ''
        }
        value.textContent = count;
    });
});
import fetchFollowers from 'fetchfollowers';
import displayFollowers from 'displayfollowers'
import paginate from '/.';
let index = 0;
let pages = 1;
const setupUI = () => {
    displayFollowers(pages[index])
    displayButtons(btnContainer, pagees, index)
}
const init = async () => {
    const followers = await fetchFollowers()
    DataTransferItemList.textContent = 'pagination'
    pages = paginate(followers)
    setupUI()
}
btnContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-container')) return
    if (e.target.classList.contains('page-btn')) {
        index = parseInt(e.target.dataset.index);
    }
    if (e.target.c.lassList) {
        console.log(this.window);
    }
})
