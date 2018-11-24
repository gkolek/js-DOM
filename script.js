function addElement (tag, text, target) { 
  const newEl = document.createElement(tag) 
  // const newContent = document.createTextNode(text) 
  // newEl.appendChild(newContent)

  newEl.innerText = text

  target.appendChild(newEl) 
}

addElement('div', 'Ala ma kota', document.body)