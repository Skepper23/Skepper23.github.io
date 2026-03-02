
function clock(){
    const date = new Date()
    const min = date.getMinutes();
    const hr = date.getHours();
    const ampm = hr >= 12 ? 'PM' : 'AM';
    const hour = hr % 12 || 12;
    const minute = min.toString().padStart(2, "0")
    const currtime = hour + ":" + minute + " " + ampm;
    document.getElementById("clock").innerHTML= (currtime)
    };

setInterval(clock,100);


function hideshow() {
  var x = document.getElementById("explorer");
  if (x.style.display === "none") {
    changeIcon()
    document.getElementById("explorer").style.top="30px";
    document.getElementById("explorer").style.right="100px";
    document.getElementById("explorer").style.left="950px";
    x.style.display = "block";
    
  } else {
    changeIcon()
    x.style.display = "none";
  }
}

function changeIcon() {
  var x = document.getElementById("explorer");
  if (x.style.display === "none") {
    document.getElementById("folder").src="img/archive-open.png";
  } else {
    document.getElementById("folder").src="img/archive.png";
    
  }
}


function hideonopen() {
    var x = document.getElementById("explorer");
    x.style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
  hideonopen();
});

dragElement(document.getElementById("explorer"));

            function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                const zoomLevel = 1.3;

                pos1 = (pos3 - e.clientX) / zoomLevel;
                pos2 = (pos4 - e.clientY) / zoomLevel;
                pos3 = e.clientX;
                pos4 = e.clientY;
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
            }



