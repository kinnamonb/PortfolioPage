var PROJ_IMG_SIZE_MAX = 200;

function resizeProjectImages() {
  var imgElements = document.getElementsByClassName("project-img");
  for (element of imgElements) {
    // Adjust the height of the image
    var width = element.clientWidth;
    // Cap to the max image size
    if (width > PROJ_IMG_SIZE_MAX) {
      element.style.width = PROJ_IMG_SIZE_MAX + "px";
      width = PROJ_IMG_SIZE_MAX;
    }
    element.style.height = width + "px";

    // Adjust the image scale
    var ratio = width / PROJ_IMG_SIZE_MAX;  // Get the resize ratio
    ratio = ratio * 100;      // Make it percent
    console.log(ratio);
    element.style.backgroundSize = ratio + "% " + ratio + "%";
  }
}

window.addEventListener("load", function(e) {
  resizeProjectImages();
});

window.addEventListener("resize", function(e) {
  resizeProjectImages();
});
