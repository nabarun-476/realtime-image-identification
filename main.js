var url = "https://teachablemachine.withgoogle.com/models/fmCzIBL-S/model.json";

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier(url, modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        var num = results[0].confidence;
        var n = num.toFixed(2);
        console.log(n);
        document.getElementById("result_object_accuracy").innerHTML = n;
    }
}