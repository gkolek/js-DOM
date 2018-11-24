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

// QS for querySelector

const divByIdQS = document.querySelector('#first')
console.log(divByIdQS)

// we can traverse NodeList by for loop
// it ALSO DO have forEach function
// but it is NOT an array
const divsByClassQS = document.querySelectorAll('.second')
console.log(divsByClassQS)

const divsByTagQS = document.querySelectorAll('div')
console.log(divsByTagQS) 