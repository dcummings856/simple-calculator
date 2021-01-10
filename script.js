let inputOne = document.querySelector('#input-one')
let inputTwo = document.querySelector('#input-two')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#subtract')
const divBtn = document.querySelector('#divide')
const multiBtn = document.querySelector('#multiply')
let total = ''

addBtn.addEventListener('click', addInputs)
subBtn.addEventListener('click', subInputs)
divBtn.addEventListener('click', divInputs)
multiBtn.addEventListener('click', multiInputs)

function addInputs() {
  total = Number(inputOne.value) + Number(inputTwo.value)
  document.querySelector('#total').innerText = total
  inputOne.value = ''
  inputTwo.value = ''
  total = ''
}

function subInputs() {
  total = Number(inputOne.value) - Number(inputTwo.value)
  document.querySelector('#total').innerText = total
  inputOne.value = ''
  inputTwo.value = ''
  total = ''
}

function divInputs() {
  total = Number(inputOne.value) / Number(inputTwo.value)
  document.querySelector('#total').innerText = total
  inputOne.value = ''
  inputTwo.value = ''
  total = ''
}

function multiInputs() {
  total = Number(inputOne.value) * Number(inputTwo.value)
  document.querySelector('#total').innerText = total
  inputOne.value = ''
  inputTwo.value = ''
  total = ''
}