const navAnimation = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.dropnavbar');


    burger. addEventListener('click', () => {
        //Toggle Dropdown Nav
        nav.classList.toggle('nav-active');

        //Burger to X
        burger.classList.toggle('burgertox');

    });

}

navAnimation ();



//fade in animation
const fade = document.querySelectorAll('.opacitychange');
const options = {
    root: null,
    threshold: 0.7 //percentage of box containing animation before initialising 
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } 
        else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }  
    })
    
}, options);

fade.forEach(fade =>{
    appearOnScroll.observe(fade);
})

