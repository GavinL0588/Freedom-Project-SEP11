
document.querySelector("#test").addEventListener("keypress",function(event){
   if(event.target.value=="Flip"){
       document.querySelector("p").style.display="block";
   }  if(event.target.value=="Flash"){
      document.querySelector("h4").style.display="block";
   }  if(event.target.value=="Bounce"){
      document.querySelector("p").style.display="block";
   }  if(event.target.value=="Swing"){
      document.querySelector("h2").style.display="block";
   }
    if(event.target.value=="Jello"){
      document.querySelector("h3").style.display="block";
   }
    if(event.target.value=="Heart Beat"){
      document.querySelector("h5").style.display="block";
   }
});

   function Refresh(){
      if(confirm){
         location.reload();
      }
   }
