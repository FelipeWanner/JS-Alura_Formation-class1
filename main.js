function playSound(audioId){
    const element = document.querySelector(audioId);

    if(element === null){
        console.log("Element can't be found")
    } else {
        if(element.localName === 'audio'){
            element.play();
        }
    }

}

const keyList = document.querySelectorAll(".key");

let i = 0

// this while is responsible for giving all the keys the function playsound(), instead of calling it 
// for every key. So when the user clicks on any key, 
// the while will atribute a function to every key, and the key he pressed will trigger the 'onclick' method

for (i; i < keyList.length; i++){

    const key = keyList[i]; //select every key from the keylist
    const instrument = key.classList[1]; //select the second class given in the HTML for every key
    const idAudio = `#sound_${instrument}`; //here we are creating the ID's that exists on the HTML document
    
    key.onclick = function () { //opening an anonymous function, since we cant call a function when the user open the browser
        playSound(idAudio); //finally, we are calling the playSound function giving the ID to it.
    }

    key.onkeydown = function (event) {
        if(event.code === 'Space' || event.code === 'Enter'){
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function () {
        key.classList.remove("ativa");
    }
}
