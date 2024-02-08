var touch = document.getElementById("touch");

var hammertime = new Hammer(document.body, {});
var ofLeft = touch.offsetLeft;
var ofTop = touch.offsetTop;
hammertime.on('pan pinch', function (event) {
    console.dir(touch);
    
    let distance = event.distance;
    let additionalEvent = event.additionalEvent;
    console.log(additionalEvent, distance);
    /* "panright" "panleft" "panup" "pandown" */
    switch (additionalEvent) {
        case "panright":
            ofLeft = (distance + ofLeft)/2;
            touch.style.left = ofLeft + "px";
            touch.style.left = distance + ofLeft+"px";
            break;
        case "panleft":
            ofLeft = (distance + ofLeft)/2;
            touch.style.left = ofLeft + "px";
            touch.style.left = distance + ofLeft+"px)";
            break;
        case "panup":
            touch.style.transform = - distance + ofTop+"px";
            break;
        case "pandown":
            touch.style.transform = distance + ofTop+"px";
            break;
        default:
            break;
    }
});
