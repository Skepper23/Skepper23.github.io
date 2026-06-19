
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
    /*document.getElementById("explorer").style.right="100px";*/
    document.getElementById("explorer").style.left="50vw";
    x.style.display = "block";
    
  } else {
    changeIcon()
    x.style.display = "none";
  }
}

function hsAbt() {
  var x = document.getElementById("aboutComp");
  if (x.style.display === "none") {
    document.getElementById("aboutComp").style.top="30vh";
    document.getElementById("aboutComp").style.left="38.5vw";
    x.style.display = "block";
  } else {
    x.style.display = "none"
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

function changeBtn(){
  console.log("asdasd")
  const img = document.getElementById('apple');
  const img1 = "img/apple1.png"
  const img2 = "img/appleselected.png"
  if (img.src.match(img1)) {
    img.src = img2;
    drpdwn()
  } else {
    img.src = img1;
    drpdwn()
  }
}

function drpdwn() {
  document.getElementById("dropdown1").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var dropdown1 = document.getElementById("dropdown1");
    if (dropdown1.classList.contains('show')) {
      changeBtn()
      dropdown1.classList.remove('show');
    }
  }
}

function hideonopen() {
    var x = document.getElementById("explorer");
    var y = document.getElementById("aboutComp");
    x.style.display = "none";
    y.style.display = "none";
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


dragElement(document.getElementById("aboutComp"));

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


