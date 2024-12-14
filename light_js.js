var d=document.getElementById("demo")
function turn(sw)
{
    if (sw==1)
    {
       d.src="turn_on_light.png"
    }
    else
    {
       d.src="turn_off_light.png"
    }
}
//without button and includes
var ds = document.getElementById("demos")
var t=false
function turns() {
    if (t)
    {
        ds.src = "turn_off_light.png"
    }
    else 
    {
        ds.src = "turn_on_light.png"
    }
    t=!t
}
//with includes
function turnss() {
    var dss = document.getElementById("demoss");
    if (dss.src.includes("turn_off_light.png")) {
        dss.src = "turn_on_light.png";
    } else if (dss.src.includes("turn_on_light.png")) {
        dss.src = "turn_off_light.png";
    }
}