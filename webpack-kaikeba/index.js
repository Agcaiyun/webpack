import a from './a.js'
import b from './b.js'

import img from './img/first.jpg'

console.log(img)

var imgSrc = img
var rootDOM = document.getElementById('root')
var image = new Image()

image.src = imgSrc
rootDOM.appendChild(image)

a()
b()

function test () {
	console.log('hello')
}

test()

