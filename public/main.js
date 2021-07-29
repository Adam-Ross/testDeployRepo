const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

loadEventListeners()

function loadEventListeners() {
    btn.addEventListener('click', getData)
}

async function getData() {
    console.log('sent')
    const res = await fetch('http://localhost:5001/api/test')
    const data = await res.json()
    console.log(data)
}