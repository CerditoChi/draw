function preload() {
    //:D
    classifier = ml5.imageClassifier("DoodleNet");
}

function setup() {
    //:D
    canvas = createCanvas(280, 280);
    var x = (window.innerWidth / 2 ) - 140;
    canvas.position(x, 300);
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
    //habla
}

function draw() {
    //:D
    strokeWeight(13);
    stroke("#003049");

    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function cc() {
    //:D
    background("white");
}

function classifyCanvas() {
    //:D
    classifier.classify(canvas,gotResult);
}

function gotResult(results) {
    //:D
    console.log(results)
    document.getElementById("tag").innerHTML = "tag: " + results[0].label;
    document.getElementById("confidence").innerHTML = "confidence: " + Math.round(results[0].confidence * 100) + "%";
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    //habla
    synth.speak(utterThis);
}