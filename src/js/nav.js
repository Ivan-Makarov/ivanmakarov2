function runNavBtn() {
	const nav = document.querySelector('.nav');
	const btn = document.querySelector('.nav-btn');

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

	document.addEventListener('click', runBtn)
}

document.addEventListener('DOMContentLoaded', runNavBtn)
