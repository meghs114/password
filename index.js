const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
 "{","[","}","]",",","|",":",";","<",">",".","?","/"];
pwel1=document.getElementById("pw-el1")
pwel2=document.getElementById("pw-el2")

// isClicked=false
function generate(){
    let pwl=5
    let pw=""
    for(let i=0;i<=pwl;i++){
        // isClicked=true
        let randomvar=Math.floor(Math.random()*characters.length+1)
        console.log(characters[randomvar])
        pw+=characters[randomvar]
    }
    return pw
}

function gen(){
    pwel1.textContent=generate()
    pwel2.textContent=generate()
    
}

