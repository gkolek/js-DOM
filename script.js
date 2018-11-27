const h1 = document.createElement('h1')
const input = document.createElement('input')
const button = document.createElement('button')

button.innerText = 'Zobacz wartość!'

input.addEventListener(
  'input',
  // () => {
  //   h1.innerText = input.value
  // }
  // this function below has the same
  // impact that function above
  // because event.target points at 
  // element that generate event 
  (event) => {
    h1.innerText = event.target.value
  }
)

button.addEventListener(
  'click',
  () => {
    alert(input.value)
  }
)

document.body.appendChild(h1)
document.body.appendChild(input)
document.body.appendChild(button)