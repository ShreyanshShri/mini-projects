var myShakeEvent = new Shake({
    threshold:4, // optional shake strength threshold
    timeout: 200 // optional, determines the frequency of event generation
});

myShakeEvent.start();

let count =0;
#hacktober special script ☠️

window.addEventListener('shake', shakeEventDidOccur, false);

//function to call when shake occurs
function shakeEventDidOccur () {

    //put your own code here etc.
    count++;
    document.getElementsByTagName("h2")[0].innerHTML = count;
}


setInterval(function(){
  var time = new Date()
   t=0
  if(time.getHours == 24 && time.getMinutes <= 10){
    count = t;
  }
}, 60000);
