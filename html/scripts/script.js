function welcome(){
    alert("Welcome to Javascript");
}

/*
    There is no need to declare  
    var keyword when variable is created
    
    ** If var keyword is not declared  
        variables will be global

*/

function add(){
      var txtNum1 = document.getElementById("txtNum1");  
      var txtNum2 = document.getElementById("txtNum2");

      var c  =  parseInt( txtNum1.value ) 
                 + parseInt( txtNum2.value); 

      var resultCntr  = document.getElementById("cntrResult");  
      resultCntr.innerText =  c;
      
}
