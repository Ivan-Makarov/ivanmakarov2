function runNav() {
	const nav = document.querySelector('.nav');
	const btn = document.querySelector('.nav-btn');
	const linkKeys = {
		KeyJ: "#about",
		KeyY: "#skills",
		KeyH: "#cv",
		KeyG: "#portfolio",
		KeyR: "#contacts"
	}
	
	function runBtn(e) {
		const clicked = e.target;
		if (clicked == btn) {
			toggleNav()
		} else {
			if (nav.style.display == 'block') {
				hide(nav)
			}
		}
	}

	function hide(el) {
		el.style.display = 'none'
	}

	function show(el) {
		el.style.display = 'block'
	}

	function toggleNav() {
		if (nav.style.display == 'none' || !nav.style.display) {
			show(nav)
		} else {
			hide(nav)
		}
	}

	function scrollToKey(e) {
		if (isIn(Object.keys(linkKeys), e.code)) {
			if (document.activeElement == document.querySelector('body')) {
				$.scrollTo(linkKeys[e.code], 500, {
					offset: -25
				})
			}
		};
	}

	document.addEventListener('click', runBtn)
	document.addEventListener('keydown', scrollToKey)
}

document.addEventListener('DOMContentLoaded', runNav)
