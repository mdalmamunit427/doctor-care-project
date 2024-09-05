// Initialize functions when DOM is loaded
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const menu = document.querySelectorAll('.navbar-menu');
const burger = document.querySelectorAll('.navbar-burger');
const close = document.querySelectorAll('.navbar-close');
const backdrop = document.querySelectorAll('.navbar-backdrop');
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');

document.addEventListener('DOMContentLoaded', () => {
   
    // setDefaultActiveLink();
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    if (burger.length && menu.length) {
        handleMobileMenuToggle(burger, menu);
    }

    if (close.length && backdrop.length && menu.length) {
        handleMobileMenuClose(close, backdrop, menu);
    }

    if (mobileMenuLinks.length && navLinks.length && menu.length) {
        handleMobileMenuLinkClick(mobileMenuLinks, navLinks, menu);
    }
});


function setActiveLink(sections, navLinks) {
    let index = sections.length;

    console.log(index)

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    if (navLinks[index]) {
        navLinks[index].classList.add('active');
    }
}

function setDefaultActiveLink() {
    const homeLink = document.querySelector('nav a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
}

function handleScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    setActiveLink(sections, navLinks);
}

function handleMobileMenuToggle(burger, menu) {
    burger.forEach(b => {
        b.addEventListener('click', () => {
            menu.forEach(m => m.classList.toggle('hidden'));
        });
    });
}

function handleMobileMenuClose(close, backdrop, menu) {
    close.forEach(c => {
        c.addEventListener('click', () => {
            menu.forEach(m => m.classList.add('hidden'));
        });
    });

    backdrop.forEach(b => {
        b.addEventListener('click', () => {
            menu.forEach(m => m.classList.add('hidden'));
        });
    });
}

function handleMobileMenuLinkClick(mobileMenuLinks, navLinks, menu) {
    mobileMenuLinks.forEach(anchor => {
        anchor.addEventListener('click', function() {
            navLinks.forEach((link) => link.classList.remove('active'));
            const targetLink = document.querySelector(`nav a[href="${this.getAttribute('href')}"]`);
            if (targetLink) {
                targetLink.classList.add('active');
            }
            menu.forEach(m => m.classList.add('hidden'));
        });
    });
}