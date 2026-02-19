// Your code here.
const container = document.querySelector(".container");
const cubes = document.querySelectorAll(".cube");
let isDragging = false;
let currentCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach((cube) => {
	cube.addEventListener('mousedown',function(e){
	  isDragging = true;
		currentCube = cube;
		offsetX = e.clientX - cube.offsetLeft;
		offsetY = e.clientY - cube.offsetTop;
	})
})
document.addEventListener("mousemove",function(e){
	if(isDragging && currentCube) {
	let newLeft = e.clientX - offsetX;
	let newTop = e.clientY - offsetY;

	let containerWidth = container.clientWidth;
	let containerHeight = container.clientHeight;

	let cubeWidth = currentCube.clientWidth;
	let cubeHeight = currentCube.clientHeight;

	if(newLeft< 0){
		newLeft = 0;
	}
	if(newLeft > containerWidth - cubeWidth){
		newLeft = containerWidth - cubeWidth;
	}

	if(newTop < 0){
		newTop = 0;
	}

	if(newTop > containerHeight - cubeHeight) {
		newTop = containerHeight - cubeHeight;
	}
	currentCube.style.left = newLeft + "px";
	currentCube.style.top = newTop + "px";
	}
});
document.addEventListener("mouseup",function(){
	isDragging = false;
	currentCube = null;
});