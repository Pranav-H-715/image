Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})
Webcam.attach(document.getElementById("cam"))

function selfie() {
    Webcam.snap(function (data) {
        document.getElementById("preview").innerHTML = "<img id='cap-selfie' src=' " + data + " '>"
    })
}
console.log(ml5.version)
var classifier = ml5.imageClassifier("DoodleNet", modelload)

function modelload() {
    console.log("model is loaded")
}

function check() {
    var img = document.getElementById("preview")
    classifier.classify(img, identify)
}

function identify(error, results) {
    if (error) {
        console.error(error)
    }else{
        console.log(results)
    }
}
