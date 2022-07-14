window.localStorage.setItem('brand', 'TATA');
window.localStorage.setItem('model', 'Harrier');

localStorage.removeItem('brand')



const great = () => {
    console.log('Hello');
}

setTimeout(great, 3000)


// setTimeout(() => {
//     console.log(1)
// }, 3000)
// console.log(2)

setTimeout(() => {
    console.log(1)
}, 0)
for (let i = 0; i < 10000; i++) {
    console.log('loop')
}
console.log(2)