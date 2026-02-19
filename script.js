// Your code here.
const containe = document.querySelector(".container");
const item = document.querySelectorAll(".item");
let isDragging = false;
let currentItem = null;
let offsetX = 0;
let offsetY = 0;

items.forEach((item) => {
	item.addEventListener('mousedown',function(e){
	  isDragging = true;
		currentItem = item;
		offsetX = e.clientX - item.offsetLeft;
		offsetY = e.clientY - cube.offsetTop;
	})
})
document.addEventListener("mousemove",function(e){
	if(isDragging && currentItem) {
	let newLeft = e.clientX - offsetX;
	let newTop = e.clientY - offsetY;

	let containerWidth = container.clientWidth;
	let containerHeight = container.clientHeight;

	let itemWidth = currentItem.clientWidth;
	let itemHeight = currentItem.clientHeight;

	if(newLeft< 0){
		newLeft = 0;
	}
	if(newLeft > containerWidth -itemWidth){
		newLeft = containerWidth -itemWidth);
	}

	if(newTop < 0){
		newTop = 0;
	}

	if(newTop > containerHeight - itemHeight) {
		newTop = containerHeight - itemHeight;
	}
	currentItem.style.left = newLeft + "px";
	currentItem.style.top = newTop + "px";
	}
});
document.addEventListener("mouseup",function(){
	isDragging = false;
	currentItem = null;
});