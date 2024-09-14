document.querySelector('#moreLink').addEventListener('click',e => scrolling(e))

document.querySelector('.logo').addEventListener('click',e =>{
    e.preventDefault()
    let sect =  e.currentTarget.getAttribute('href');
    const node = document.querySelector(`${sect}`)
    node.scrollIntoView({behavior:"smooth"})
})

document.querySelector('.nav').addEventListener('click',e =>{
    if(e.target.classList.contains('nav-item')) scrolling(e)
})

function scrolling(e){
    e.preventDefault()
    let sect =  e.target.getAttribute('href');
    const node = document.querySelector(`${sect}`)
    node.scrollIntoView({behavior:"smooth"})
}


