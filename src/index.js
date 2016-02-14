import message, { otherMessage } from './message'

let header = document.createElement('h2')
header.innerText = message
document.body.appendChild(header)

let label = document.createElement('label')
label.innerText = otherMessage
document.body.appendChild(label)
