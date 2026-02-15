
function clock(){
    const date = new Date()
    const min = date.getMinutes();
    const hr = date.getHours();
    const ampm = hr >= 12 ? 'PM' : 'AM';
    const hour = hr % 12;
    const minute = min.toString().padStart(2, "0")
    const currtime = hour + ":" + minute + " " + ampm;
    document.getElementById("clock").innerHTML= (currtime)
    };

setInterval(clock,100);
