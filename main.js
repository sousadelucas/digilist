// criando function para ao clicar na imagem aparecer o texto que condiz
function initTabnAV() { 

const tabMenu = document.querySelectorAll('.js-tabmenu li');

const tabContent = document.querySelectorAll('.js-tabcontent section');


if(tabMenu.length && tabContent.length) {
tabContent[0].classList.add('ativo')

function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo')
    });
    tabContent[index].classList.add('ativo')
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index);
        });
        });
};
};

// criando function criar um "accordionList", que estará no FAQ.

function initAccordionList () {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    if(accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion() {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
};

    accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
        });
    }
}

// criando function para scroll suave na pag

function scrollSuave () {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection (event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    };

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    });
}

// scroll section

function scrollAnimado () {
    const sections = document.querySelectorAll(".js-scroll");
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - windowMetade;
            if(sectionTop < 0) {
                section.classList.add('ativo')
            }
        });
    };
    window.addEventListener('scroll', animaScroll);
};


initTabnAV();
initAccordionList ()
scrollSuave();
scrollAnimado ()

