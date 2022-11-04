//modell
let greencolor = `unactive`; 
let yellowcolor = `unactive`; 
let redcolor = `unactive`; 
//disse er nå koblet opp til CSS class siden navnet er lagt inn i class i div-en. 
//endre klassen ved å bytte ut navnet til en eksisterende css klasse. 

//controller
function changeGreen(){
    greencolor = `active`; 
    yellowcolor = `unactive`; 
    redcolor = `unactive`; 
    updateview()
}
function changeYellow(){
    greencolor = `unactive`; 
    yellowcolor = `active`; 
    redcolor = `unactive`; 
    updateview()
}

function changeYellowAndRed(){
    greencolor = `unactive`;
    yellowcolor = `active`;
    redcolor = `active`;
    updateview()
}
function changeRed(){
    greencolor = `unactive`; 
    yellowcolor = `unactive`; 
    redcolor = `active`; 
    updateview()
}

function colorOn(){
    greencolor = `active`; 
    yellowcolor = `active`; 
    redcolor = `active`; 
    updateview()
    
}

function colorOff(){
    greencolor = `unactive`; 
    yellowcolor = `unactive`; 
    redcolor = `unactive`; 
    updateview()
    
}

function autoLights(){
    setInterval(trafficlight(), 4000)
    
}

function trafficlight(){
    setTimeout(changeRed, 1000)
    setTimeout(changeYellowAndRed, 2000)
    setTimeout(changeGreen, 3000)
    updateview()
}


//view
function updateview(){
    document.getElementById(`app`).innerHTML = /*HTML*/`

    <div id="light">
    <div id="red" class="rød sirkel ${redcolor}"></div>
    <div id="yellow" class="orange sirkel ${yellowcolor}"></div>
    <div id="green" class="grønn sirkel ${greencolor}"></div>
    </div>
    <button onclick="changeRed()">Rød</button>
    <button onclick="changeYellow()">Gul</button>
    <button onclick= "changeGreen()">Grønn</button>
    <button onclick="colorOn()">Alle</button>
    <button onclick="colorOff()">Off</button>
    <button onclick="autoLights()">Auto</button>
    `;
}
updateview()