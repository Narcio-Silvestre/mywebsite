const sect1 = document.querySelector('.section_1');
const section = document.querySelectorAll("section");
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');

document.querySelector('#moreLink').addEventListener('click',e => scrolling(e))

logo.addEventListener('click',e =>{
    e.preventDefault()
    let sect =  e.currentTarget.getAttribute('href');
    const node = document.querySelector(`${sect}`)
    node.scrollIntoView({behavior:"smooth"})
})

nav.addEventListener('click',e =>{
    if(e.target.classList.contains('nav-item')) scrolling(e)
})

function scrolling(e){
    e.preventDefault()
    let sect =  e.target.getAttribute('href');
    const node = document.querySelector(`${sect}`)
    node.scrollIntoView({behavior:"smooth"})
}

function sectObser(entries,observer){
    const [first]= entries;
    if(!first.isIntersecting) return;
    first.target.classList.remove('section_hidden');
    observer.unobserve(first.target);
}

let section_obser = new IntersectionObserver(sectObser,{
    root:null,
    threshold: 0.20
});

section.forEach((e) =>{
 if(e.getAttribute('class')!= sect1.getAttribute('class')){
    section_obser.observe(e)
    e.classList.add('section_hidden');
 }
}
)


function sect1Obser (entries, observer){
    const [f] = entries;
    f.isIntersecting ? nav.classList.remove('nav_sup') : nav.classList.add('nav_sup');
}

let section1_obser = new IntersectionObserver(sect1Obser,{
    root:null,
    threshold: 0,
});
section1_obser.observe(sect1)

nav.addEventListener('mouseover',e=>{
    nav.classList.remove('nav_sup')
})

nav.addEventListener('mouseout',e=>{
    const sec1Bot = sect1.getBoundingClientRect().bottom
    if(sec1Bot<0) nav.classList.add('nav_sup')
})


document.querySelectorAll('img').forEach(e=>{
    e.setAttribute('loading','lazy')
})
