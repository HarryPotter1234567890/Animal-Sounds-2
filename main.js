function startClassification(){
    navigator.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/q-EvgqI_F/", modelReady);
    
}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
           }else{
               console.log(results);
           }
}