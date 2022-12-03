const arrows = document.querySelectorAll('.arrow');
console.log(arrows)
const movieLists = document.querySelectorAll('.movie-list')
console.log(movieLists)

arrows.forEach((arrow, i) => {
    
    const itemNumber = movieLists[i].querySelectorAll('img').length;
    console.log(itemNumber)
    let clickCounter = 0;
    arrow.addEventListener("click", ()=>{
        const ratio = Math.floor(window.innerWidth / 270)
        clickCounter++;
        if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
            }px)`
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0
        }
    })
    console.log(Math.floor(window.innerWidth / 270))
})
