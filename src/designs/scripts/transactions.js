const arrowUp = document.querySelectorAll('.arrow-up')
const arrowDown = document.querySelectorAll('.arrow-down')

console.log(arrowUp, arrowDown);

arrowDown.forEach( e => {
    e.addEventListener('click', () => {
        e.setAttribute('class', 'hidden')
    })
})