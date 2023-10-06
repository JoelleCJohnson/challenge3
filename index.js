function addNumbers(event){
    event.preventDefault()
    const number1 = event.target.number1.value
    const number2 = event.target.number2.value
    const number3 = Number(number1) + Number(number2)
    const h2 = document.querySelector('h2')
    h2.innerText = number1 + " + " + number2 + " = " + number3
}

const form = document.querySelector('form')
form.addEventListener('submit', addNumbers)