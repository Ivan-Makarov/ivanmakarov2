function animate() {	
	const output = document.querySelector('.page-heading');
	animateStr('Иван Макаров — веб-разработчик', output, 2);

	const skills = [...document.querySelectorAll('.skill-bar__rate')]
	animateBars(skills, 2)

	const myphoto = document.querySelector('.img-container__img')

	myphoto.addEventListener('load', (e) => {
		e.currentTarget.classList.add('animated')
	})
	
	
	function animateStr(str, target, duration = 1) {
		target.textContent = '';
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

	function animateBars(targets, duration) {
		targets.forEach(animateBar)

		function animateBar(bar) {
			bar.style.width = '100%';
			const skill = bar.dataset.skill;
			const durationMs = duration * 1000 * ((100 - skill) / 100);
			let start = null;
			let timer = null;
	  	
			function tick(timestamp) {
				start = start || timestamp;
		
				const elapsedTime = timestamp - start;
				const progress = elapsedTime / durationMs;

				const value = 100 - Math.floor(progress * (100 - skill)); 
			
				if (progress >= 1) {
					bar.style.width = skill + '%';
					return cancelAnimationFrame(timer);
				}
			
				bar.style.width = value + '%';
				timer = requestAnimationFrame(tick);  
			}
			
			timer = requestAnimationFrame(tick);

		}
	}
}

document.addEventListener('DOMContentLoaded', animate)
