function animate() {	
	
	function animateStr(str, target, duration = 1) {
		const durationMs = duration * 1000;
		let start = null;
		let timer = null;
		let index = 0;
	  	
		function tick(timestamp) {
			start = start || timestamp;
	
			const elapsedTime = timestamp - start;
			const progress = elapsedTime / durationMs;
			const curIndex = Math.floor(str.length * progress); 

			if (index < curIndex) {
				index = curIndex;
			}; 

			const value = str.slice(0, index);
		
			if(progress >= 1) {
		  		target.textContent = str;
		  		return cancelAnimationFrame(timer);
			}
		
			target.textContent = value + '_';
			timer = requestAnimationFrame(tick);  
	  	}
	    
	  	timer = requestAnimationFrame(tick);
	}

	const output = document.querySelector('.page-heading');
	animateStr('Иван Макаров — веб-разработчик', output, 3);
}

document.addEventListener('DOMContentLoaded', animate)
