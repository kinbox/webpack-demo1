import x from "./x"
import png from './asset/1.png'

const div = document.getElementById("app")
div.innerHTML = `
<img src='${png}'>
`
const button = document.createElement('button')
button.innerText = '懒加载'
div.appendChild(button)

button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        module.default()
    }, () => {
        console.log('模块加载错误')
    })
}