var shovelry = function(options) {
	for (var element of document.getElementsByTagName("em")) {
		var replacementTag = document.createElement("em")
		var delay = 0;
		for (var char of element.textContent) {
			var newElement = document.createElement("span");
			if (char == " ") {
				newElement.innerHTML = "&nbsp;"
			} else {
				newElement.innerHTML = char;
			}
			newElement.style.animationDelay = delay + "s";
			replacementTag.appendChild(newElement)
			delay -= 0.1;
		}
		element.innerHTML = replacementTag.innerHTML;
	}
	for (var element of document.getElementsByTagName("strong")) {
		var replacementTag = document.createElement("strong")
		var delay = 0;
		for (var char of element.textContent) {
			var newElement = document.createElement("span");
			if (char == " ") {
				newElement.innerHTML = "&nbsp;"
			} else {
				newElement.innerHTML = char;
			}
			newElement.style.animationDelay = delay + "s";
			replacementTag.appendChild(newElement)
			delay -= 0.1;
		}
		element.innerHTML = replacementTag.innerHTML;
	}
}
