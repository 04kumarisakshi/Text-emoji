var btn1 = document.querySelector(".b1")
var btn2 = document.querySelector(".b2")
var btn3 = document.querySelector(".b3")
var btn4 = document.querySelector(".b4")
var message =document.querySelector("#mess")
var Encr = document.querySelector("#Encrypt")
var arrow=document.querySelector("#arrow")


function btnclicking(){
    btn2.addEventListener("click",function(){
    document.querySelector("#encr").style.display="none"
    document.querySelector("#decr").style.display="block"
    btn1.style.backgroundColor=" rgba(157, 156, 156, 0.696)"
    btn2.style.backgroundColor=" rgba(0, 0, 0, 0.689)"
    arrow.style.rotate = "180deg"
    clear()
    })
    btn1.addEventListener("click" , function onclick(){
        document.querySelector("#decr").style.display="none"
        document.querySelector("#encr").style.display="block"
            btn2.style.backgroundColor=" rgba(157, 156, 156, 0.696)"
            btn1.style.backgroundColor=" rgba(0, 0, 0, 0.689)"
            arrow.style.rotate = "360deg"
            clear()
        })
        document.querySelector("#clearbtn").addEventListener("click",function(){
                clutter=""
                document.querySelector("#result").innerHTML= clutter
            })
        
};
btnclicking()


var clutter=""

function encryption(){
    btn3.addEventListener("click", function(){
    
   var input = document.getElementById("textmess").value
   var password = document.getElementById("pass").value
   const str =input.split("")
   str.forEach(element => {
       clutter +=`&#128${element.charCodeAt()}`
   });
   btn3.addEventListener("click",function(){
    document.querySelector("#result").style.display="block"
    document.querySelector("#result").innerHTML= clutter
    document.querySelector("#result").style.backgroundColor="rgba(111, 110, 110, 0.296)"
})
   document.querySelector("#result").innerHTML=clutter
   var dat =[];
   if(JSON.parse(localStorage.getItem('data1'))){
    dat = JSON.parse(localStorage.getItem('data1'))
    dat.push({"passsword":password,"input":input,"clutter":clutter})
   }
  else{
    dat =[{"passsword":password,"input":input,"clutter":clutter}]
  }
  localStorage.setItem('data1',JSON.stringify(dat))
   
    })
}
 
encryption()
var clutter2=""
function decryption(){
    btn4.addEventListener("click",function(){
           
   var input2 = document.getElementById("emojimess").value
 var password2 = document.getElementById("pass2").value
   const str2 =input2.split("")
   console.log(input2)
   str2.forEach(element => {
       clutter2 +=`&#${element.CodepointAt(0)}`
       console.log(clutter2)
   });
   
   var found ;
   for(let i of user)
   {
    if(i.clutter == clutter2){
        found=i
    }
   }
   if(found.clutter === clutter2){
    document.querySelector("#result").style.display ="block"
    document.querySelector("#result").innerHTML =found.input
   }
   else{
    document.querySelector("#result").innerHTML = "Wrong password"
    document.querySelector("#result").style.display ="block"
   }
    })
    
}

function clear(){
    clutter=""
    document.querySelector("#result").innerHTML= clutter
}
clear()