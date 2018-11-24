const divById = document.getElementById('first')

console.log(divById)
console.dir(divById)

const divsByClass = document.getElementsByClassName('second')
console.log(divsByClass)

// we can traverse HTMLCollection by for loop
// but it do not have forEach function
for(let i = 0; i < divsByClass.length; i++){
	console.log(divsByClass[i])
}

const divsByTag = document.getElementsByTagName('div')
console.log(divsByTag) 