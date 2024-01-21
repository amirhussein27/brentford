let mybtn=document.getElementById("mybtn")
mybtn.addEventListener('click',function(){
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





mybtn.addEventListener('click',function(){
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

else{
  console.log(result);
}
})
let a=0
function addme(){
  
  a++
 result.innerHTML= "wrong choices = " + a
  
}
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
alert("truuuuuuuuuu")
a=0
result.innerHTML=a
}
else{
  alert("formation is not correct")
  console.log(result.value);

}
})