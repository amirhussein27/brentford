let mybtn=document.getElementById("mybtn")
let gk=document.getElementById("gk")
let rb=document.getElementById("rb")
let cb1=document.getElementById("cb1")
let cb2=document.getElementById("cb2")
let lb=document.getElementById("lb")
let cm1=document.getElementById("cm1")
let cm2=document.getElementById("cm2")
let cm3=document.getElementById("cm3")
let cm4=document.getElementById("cm4")
let cf1=document.getElementById("cf1")
let cf2=document.getElementById("cf2")
let result=document.getElementById("result")
let a=0
mybtn.addEventListener('click',function(){

a=0




if(gk.value =="flekken" 
&& rb.value =="ben-mee" 
&& cb1.value =="pinnock" 
&& cb2.value =="goode"
&& lb.value =="reguilon"
&& cm1.value =="ghodos"
&& cm2.value =="lewis-potter"
&& cm3.value =="onyeka"
&& cm4.value =="dasilva"
&& cf1.value =="tony"
&& cf2.value =="maupay"

 ) {
a=0
result.innerHTML=a
alert("truuuuuuuuuu")

}
else{
  console.log(result.value);
  alert("formation is not correct")
 
  if(gk.value !=="flekken"){
    addme()
    }
    if(rb.value !=="ben-mee"){
      addme()
    }
    if(cb1.value !=="pinnock"){
      addme()
    }
    if(cb2.value !=="goode"){
      addme()
    }
    if(lb.value !=="reguilon"){
      addme()
    }
    if(cm1.value !=="ghodos"){
      addme()
    }
    if(cm2.value !=="lewis-potter"){
      addme()
    }
    if(cm3.value !=="onyeka"){
      addme()
    }
    if(cm4.value !=="dasilva"){
      addme()
    }
    if(cf1.value !=="tony"){
      addme()
    }
    if(cf2.value !=="maupay"){
      addme()
    }

}
})
function addme(){
  
  a++
 result.innerHTML= "wrong choices = " + a
  
}