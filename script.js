const btn = document.querySelector('button')

btn.setAttribute('disabled', '')
btn.setAttribute('id', 'button')

btn.removeAttribute('disabled')

// btn.style.backgroundColor = 'red'
// btn.style.borderRadius = '5px'
// btn.style.border = 'none'
btn.style.color = 'white'

// cssText overwrites all styles
btn.style.cssText = `
  background-color: red;
  border-radius: 5px;
  border: none;
`