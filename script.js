let screen=document.getElementById("result")
let buttons=document.querySelectorAll("button")
let screenvalue=""
for(item of buttons){
    item.addEventListener('click',function(e){
       buttontxt = e.target.value;
       
        if(buttontxt=='C'){
            screenvalue= screenvalue.slice(0,-1);;
            screen.value = screenvalue;
            
        }
        else if(buttontxt == 'Clear'){
            screenvalue='';
            screen.value=screenvalue;
          
          }
        else if(buttontxt == '='){
            screenvalue  = eval( screenvalue).toString();
           screen.value = screenvalue
          }
          
        else {
            
            screenvalue =screenvalue.concat(buttontxt)
            screen.value =screenvalue;
        }

    })
}