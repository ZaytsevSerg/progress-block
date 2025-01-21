const progressCircle = document.querySelector('.progress-circle')
const valueInput = document.getElementById('valueInput')
const animateToggle = document.getElementById('animateToggle')
const hideToggle = document.getElementById('hideToggle')

let animationInterval = null

function updateProgress(value) {
	const angle = (value / 100) * 360
	progressCircle.style.background = `conic-gradient(#007bff 0deg ${angle}deg, #e4e8ed ${angle}deg 360deg)`
}

function animateProgress() {
	let currentValue = 0
	clearInterval(animationInterval)
	animationInterval = setInterval(() => {
		if (currentValue >= 100) {
			clearInterval(animationInterval)
		} else {
			currentValue++
			updateProgress(currentValue)
		}
	}, 50)
}

function toggleAnimation() {
	const isActive = animateToggle.classList.toggle('active')
	isActive ? animateProgress() : clearInterval(animationInterval)
}

function toggleVisibility() {
	const isHidden = hideToggle.classList.toggle('active')
	progressCircle.style.display = isHidden ? 'none' : 'block'
}

valueInput.addEventListener('input', e => {
	const value = Math.min(Math.max(e.target.value, 0), 100)
	updateProgress(value)
})

animateToggle.addEventListener('click', toggleAnimation)
hideToggle.addEventListener('click', toggleVisibility)

updateProgress(0)
