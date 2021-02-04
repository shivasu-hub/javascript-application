 function calculate(){
     var amounT= document.getElementById("amount").value;
     var service=document.getElementById("service").value;
    var ppls=document.getElementById("ppl").value;

    //valid input
    if(amounT=="" ){
      alert("please enter amount")
    return;
    }
    if(ppls=="" ){
      alert("please enter number of people")
    return;
    }

  //Calculate tip
  var total = (amounT * service) / ppls;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  
  //Display the tip
  document.getElementById("tip").innerHTML = "Tip Amount <br>" +  total +"<br>each" ;

}


var arr=[1,2,3,4,5,6,7,8,9];

var abc=[];

for(i=0;i<arr.length;i++){
  if (arr[i]==value)
}
    

