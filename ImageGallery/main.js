var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var overlay = document.querySelector('.overlay');
btn = document.querySelector('button');
var imagePath = "images/pic:number:.jpg";
var overlayToggleBool = false;

btn.onclick = function(e) { overlayToggleBool = !overlayToggleBool; enableDarkOverlay(overlayToggleBool); };

/* Looping through images */

  {
    var i;
    for(i = 0; i < 5; i++)
    {
      var newImage = document.createElement('img');
      var newImagePath = imagePath.replace(":number:",i+1);
      newImage.setAttribute('src', newImagePath);
      thumbBar.appendChild(newImage);
      newImage.onclick = function (e) {displayImage(e.target.getAttribute("src"))};};
  }

  /* Wiring up the Darken/Lighten button */
function enableDarkOverlay(enable)
{
    btn.setAttribute("class", (enable)? "light" : "dark");    
    btn.textContent = (enable)? "Lighten" : "Darken";
    var overlayDarkness = (enable)? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)";
    overlay.style.backgroundColor = overlayDarkness;
}

function displayImage(newSrc)
{
  if("string" === typeof(newSrc) && newSrc != "")
  {
      displayedImage.setAttribute("src",newSrc);    
  }
}