var Chrono_duree:float = 10.0;// (en secondes)
private var timeRemain:float;// (en secondes)
var clockIsPaused:boolean = false;
var GUIText:UI.Text;
var percent:float;
var clockFG:UI.Image;
var Pie_fill:UI.Image;
var Pie_bgr:UI.Image;
var Pie_fin:UI.Image;


function Start() {
    SetDuration();
}

function Update () {
    if (clockIsPaused == false){
        DoCountDown();
        clockFG.fillAmount = percent;
        Pie_fill.fillAmount = percent;
    }
}

function SetDuration(){
    timeRemain = Chrono_duree;  
    clockIsPaused = false;
    Pie_bgr.enabled = true;
    Pie_fill.enabled = true;
    Pie_fin.enabled = false;
}

function ShowTime(){
    var minutes:int;
    var secondes:int;
    var timeStr:String;
    var millisec:int;
    var timeRemainRounded:int = timeRemain;

    minutes = timeRemain/60;
    secondes = timeRemain % 60; // % = modulo
    millisec = (timeRemain-timeRemainRounded)*100;
    timeStr = minutes.ToString() + ":" + secondes.ToString("D2") + ":"+ millisec.ToString("D2");;  // (« D2 ») On precise que l'on veut absolument 2 decimales.
    GUIText.text = timeStr;
}

function DoCountDown() {
    timeRemain = Chrono_duree - Time.time;
    percent = timeRemain / Chrono_duree;
    if (timeRemain < 0){
        timeRemain = 0;
        TimeIsUp();
    }
    else{
        ShowTime();
    }
}

function TimeIsUp(){
    GUIText.alignment = TextAnchor.MiddleCenter;
    GUIText.text = "Time out";
    clockIsPaused = true;
    Pie_bgr.enabled = false;
    Pie_fin.enabled = true;
}