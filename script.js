const eye = document.getElementsByClassName('eye');
document.onmousemove = function (event) {
	const x = (event.clientX * 8) / window.innerWidth + '%';
	const y = (event.clientY * 8) / window.innerHeight + '%';

	for (let i = 0; i < 2; i++) {
		eye[i].style.left = x;
		eye[i].style.top = y;
		eye[i].style.transform = `translate(${x},${y})`;
	}
};