// TABS
// Get the container element
var btnContainer = document.getElementById("pop-dishes-tab");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("popular-dishes__item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("popular-dishes__item_active");
    current[0].className = current[0].className.replace(" popular-dishes__item_active", "");
    this.className += " popular-dishes__item_active";
  });
}

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
	
});