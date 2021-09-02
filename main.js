function Start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/z_9g8_Snq/model.json", modelReady);
}

function modelReady(){
    console.log("Model is Ready!");
    classifier.classify(gotResults);
}

function gotResults(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log("got result")
        r = Math.floor(Math.random * 255) + 1;
        g = Math.floor(Math.random * 255) + 1;
        b = Math.floor(Math.random * 255) + 1;

        document.getElementById("animal_sound").innerHTML = result[0].label;
        document.getElementById("animal_accuracy").innerHTML = (result[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("stuff").style.color = "red";
    }
    cat = document.getElementById("animal_image");
    dog = document.getElementById("animal_image");
    cow = document.getElementById("animal_image");
    lion = document.getElementById("animal_image");
    background = document.getElementById("animal_image");

    if(result[0].label == "Barking"){
    dog.src = "dog.gif"
    }
    else if(result[0].label == "Meowing"){
        cat.src = "meow.gif";
    }
    else if(result[0].label == "Mooing"){
        cow.src = "cow.gif";
    }
    else if(result[0].label == "Roar"){
        lion.src = "lion.gif"
    }
    else if(result[0].label == "Background Noise"){
        background.src = "listen.gif"
    }
}