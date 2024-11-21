const div = document.getElementById('g')
const div1 = document.getElementById('h')
const bt = document.getElementsByClassName('b')


ct=0
bt[0].addEventListener('click', ()=>{
    div.innerText='Ты что наделал...'
    div1.innerText=++ct
})


