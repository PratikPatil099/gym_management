let nextDom = document.getElementById('next')
let prevDom = document.getElementById('prev')
let carouselDom = document.querySelector('.carousel')
let listItemDom = document.querySelector('.carousel .list')
let thumbnailDom = document.querySelector('.carousel .thumbnail')

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 2000;
let timeAutoNext = 11000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
},timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem])
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev')
    },timeRunning)
    
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    },timeAutoNext);
   
}
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');

        }else{
            entry.target.classList.remove('show')
        }
    });
});
const hiddenElements = document.querySelectorAll('.About .content , .About .patti , .About .f1 img , .classes h1 , .classes img , .classes .content');
hiddenElements.forEach((el) => observer.observe(el));

// trainers 
const observert = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');

        }else{
            entry.target.classList.remove('show')
        }
    });
});
const hiddenElementst = document.querySelectorAll('.trainers .content , .trainers .trainersImg img , .contenttrain , .trainersImg2 img ');
hiddenElementst.forEach((el) => observer.observe(el));


// fees structure
