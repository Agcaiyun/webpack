import img from './img/first.jpg'
import './index.css'

var imgSrc = img
var rootDOM = document.getElementById('root')
var image = new Image()

image.src = imgSrc
image.classList.add('img')
rootDOM.appendChild(image)