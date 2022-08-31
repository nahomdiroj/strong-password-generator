const cha =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const num1=[ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const sym1=[ "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let sym = document.getElementById("sym")
let num = document.getElementById("num")
let len = document.getElementById("len")
let pwd1 = document.getElementById("pwd1")
let pwd2 =document.getElementById("pwd2") 
let rand2
let if1
let pwdA =[]
let rand1 
let pwdB=[]




function genep(){
   
    if (num.checked == true && sym.checked === false){
       if1 = cha.length+num1.length
        console.log("num")
        
        console.log(if1)


      } else if(sym.checked == true && num.checked === false) {
        console.log("sym")
        if1= cha.length+sym1.length
        console.log(if1)
      }else if(sym.checked === true && num.checked === true){
        if1=cha.length + sym1.length + num1.length
        console.log(if1)
        console.log("both")

      }else{
        if1=cha.length
      }

    for(let i=0; i<len.value; i++){

        rand2 = Math.floor( Math.random()*if1)
        rand1 = Math.floor( Math.random()*if1)
        
      
        pwdA.push(characters[rand2])
        pwdB.push(characters[rand1])
    }
   

  
    pwd1.textContent=pwdA
    pwd2.textContent=pwdB

    pwdA=[]
    pwdB=[]
    
}




function copy(){
    /* Get the text field */
 



 /* Copy the text inside the text field */
 navigator.clipboard.writeText(pwd1.innerText+" second "+pwd2.innerText)
 
 /* Alert the copied text */
 alert("Copied the text: " + pwd1.innerText+" second pwd "+pwd2.innerText);
}



