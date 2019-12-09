import a from './a.js'
import b from './b.js'

import img from './img/first.jpg'
import './index.css'

console.log(img)

var imgSrc = img
var rootDOM = document.getElementById('root')
var image = new Image('img')

image.src = imgSrc
image.classList.add('img')
rootDOM.appendChild(image)

a()
b()

function test () {
	console.log('hello')
}

test()

