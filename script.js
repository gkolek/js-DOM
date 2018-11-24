function addElement (tag, text, target) { 
  const newEl = document.createElement(tag) 
  const newContent = document.createTextNode(text) 
  newEl.appendChild(newContent)

  target.appendChild(newEl) 
}

addElement('div', 'Ala ma kota', document.body)