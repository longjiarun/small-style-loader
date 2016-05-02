var _document = document,
	_head = _document.head,
	styleElements = []

function insertStyleElement(options, styleElement) {
	var lastStyleElement = styleElements[styleElements.length - 1],
		nextSibling

	if (options.insertAt === 'top') {
		if(!lastStyleElement) {
			_head.insertBefore(styleElement, _head.firstChild)
		} else if( (nextSibling = lastStyleElement.nextSibling) ) {
			_head.insertBefore(styleElement, nextSibling)
		} else {
			_head.appendChild(styleElement)
		}
		styleElements.push(styleElement)
	} else if (options.insertAt === 'bottom') {
		_head.appendChild(styleElement)
	}
}

module.exports = function(options) {

	var styleElement = _document.createElement('style')

	styleElement.type = 'text/css'

	styleElement.appendChild(_document.createTextNode(options.css))

	insertStyleElement(options, styleElement)
}