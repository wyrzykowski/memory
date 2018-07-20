function boardElement (id,value)
{
this.id = id;
this.value=value;
}

var elementsArray = new Array;
var clickCounter=0;
var gotMemo=0
 var rowNumber=0;     
 var strForId=rowNumber.toString();
 var showNumber=0;
var prevShowedId;

window.onload = function start()
{
  
    starting();
}


function starting()
{
    elementsArray = new Array;
    clickCounter=0;
    gotMemo=0
     rowNumber=0;     
     strForId=rowNumber.toString();
    showNumber=0;
    

 
document.getElementById("start-board").style.display="block";
document.getElementById("loader1").style.display="none";
document.getElementById("generate").addEventListener("click", forStartEvent);

}
function forStartEvent(){

    var radios = document.getElementsByName('optradio');
    var choosed;
    for (var i = 0, length = radios.length; i < length; i++)
    {
     if (radios[i].checked)
     {
      // do whatever you want with the checked radio
     choosed=i;
    
    
      // only one radio can be logically checked, don't check the rest
      break;
     }
    }


if(choosed==0){



    //VERY IMPORTANT TO REMOVE CLICK EVENT LISTENER! It;s woring double times!!!
    document.getElementById("generate").removeEventListener("click", forStartEvent);
    size = document.getElementById("board-size").value;
 
    size = size.toString();
   
    if(size%Math.sqrt(size)!=0 || size<=1) {
   
        document.getElementById("input-error").innerHTML="Set squre size or choose difficulty level!";
        document.getElementById("input-error").style.display="block";
        document.getElementById("generate").addEventListener("click", forStartEvent);
     
   
    }
    else{
        document.getElementById("loader1").style.display="block";
        setTimeout(function() {
            document.getElementById("input-error").style.display="none";
            document.getElementById("C").style.display="block";
        
            keepGoing(size);
            
            document.getElementById("start-board").style.display="none";
          
           }, 10);
    }
}

else {
    switch(choosed) {
        case 1:
           size=4;
            break;
        
            case 2:
             size=16;
            break;

            case 3:
            size=64;
            break;

        default:
           alert("something wrong!");
    }
    document.getElementById("loader1").style.display="block";
    setTimeout(function() {
        document.getElementById("input-error").style.display="none";
        document.getElementById("C").style.display="block";
    
        keepGoing(size);
        
        document.getElementById("start-board").style.display="none";
      
       }, 10);

}

}


function keepGoing(size)
{
    

    document.getElementById("game").style.display="block";
    document.getElementById("show-me-size").innerHTML="<h3>Board size: "+size+"</h3>";
    document.getElementById("show-me-clicks").innerHTML="<h3>Clicks counter: 0"+"</h3>";
    document.getElementById("show-me-memo").innerHTML="<h3>Got memo: 0"+"</h3>"; 




InitializeBoard(size);

createBoard(size);
setStyle(size);
// have to run function, otherwise it will display error with undifinied object


}

function endGame()
{
  
    console.log("end");
   

    document.getElementById("end-board").style.display="block";
    document.getElementById("end-board-size").innerHTML="<h3>Board size: "+ size+"</h3>";
    document.getElementById("end-board-clicks").innerHTML="<h3>Clikcks counter: "+clickCounter+"</h3>";
    document.getElementById("end-board-memo").innerHTML="<h3>Got memo: "+ gotMemo+"</h3>";
    document.getElementById("C").style.display="none";
    $( "#B" ).empty();

  
  
    document.getElementById("play-again").addEventListener("click",forEndGameEvent);
   

    
}

function forEndGameEvent(){
    document.getElementById("play-again").removeEventListener("click",forEndGameEvent);
    document.getElementById("end-board").style.display="none";
    starting();
}

var clear_body = function (){
    var lista = document.body.childNodes;
    for (var i = lista.length - 1; i >= 0 ;i--){
        document.body.removeChild(lista[i])
        
    }
}


function show(){
    setTimeout(function(){  }, 2000);
    showNumber++;
    clickCounter++;
    document.getElementById("show-me-clicks").innerHTML="<h3>Clikcks counter: "+clickCounter+"</h3>";
   
    console.log("showed:",this.id);
    var strForAnswer = "";
    strForAnswer= elementsArray[this.id].value.toString();
    document.getElementById(this.id).innerHTML=strForAnswer;
    document.getElementById(this.id).style.color="yellow";
    
    if(showNumber>=2)
    {
        var id1=this.id;
        setTimeout(function(){ hide(id1,prevShowedId) }, 800);
    }
    else prevShowedId=this.id;
   
}
function hide(id1,id2){
    console.log("ids",id1,id2);
    if(elementsArray[id1].value==elementsArray[id2].value && id1!=id2)
    {   gotMemo+=2;
         console.log("the same",gotMemo);
         document.getElementById(id1).style.opacity="0";
        document.getElementById(id2).style.opacity="0";
        document.getElementById("show-me-memo").innerHTML="<h3>Got memo: "+ gotMemo+"</h3>";
        if(gotMemo==size && gotMemo>0) 
        { 
           
            endGame();
        
        }
    }
    document.getElementById(id1).innerHTML="?";
    document.getElementById(id2).innerHTML="?";
    document.getElementById(id1).style.color="white";
    document.getElementById(id2).style.color="white";
    showNumber=0;
   
}
function setStyle(size){
    var elements = document.getElementsByClassName('mem'), i, len;
    var height = size*10*(1/size);
    var fontSize=2/3*height;
    var strForHeight = height.toString();
    var strForfontSize = fontSize.toString();
    strForHeight = strForHeight.concat("vh");
    strForfontSize = strForfontSize.concat("vh");
    
    for (i = 0, len = elements.length; i < len; i++) {
      elements[i].style.height=strForHeight;
      elements[i].style.width=strForHeight;
      elements[i].style.fontSize=strForfontSize;
    }

}
function createBoard(size){
   
    for(var i=0;i<size;i++)
    {
    if(i%Math.sqrt(size)==0 ||i<=0)
    {
       
        strForId=rowNumber.toString();
        strForId=("row").concat(strForId);
      
        
        var div = document.createElement("div");
        document.getElementById('B').appendChild(div);
        div.setAttribute('class','row');
        div.setAttribute('id',strForId);
        rowNumber++;
    }
    console.log(strForId);
    var div = document.createElement("div");
    document.getElementById(strForId).appendChild(div);
    div.setAttribute('class','mem col-lg-3 col-md-3 col-xs-3');
    div.setAttribute('id',i);
    div.innerHTML="?";
    document.getElementById(i).addEventListener("click", show);
    }
}




function InitializeBoard(size) {
 
    var ifContinue;
    for(var i=0;i<size;i++)
    {
        ifContinue=false;
        randValue= Math.floor(Math.random()*size/2);
        var existed =0;
        for(var j=0;j<i;j++)
    {
        
        if(elementsArray[j].value===randValue && i>0){++existed /*,console.log("existed:",existed,randValue,elementsArray[j].value)*/};
        if(existed>=2){ ifContinue=true;console.log("existed:",existed);}
    }
    if(ifContinue==true)
    {
        --i;
        continue;
       
    }

    

    elementsArray[i]= new boardElement(i,randValue); 
    
    //document.getElementById(i).innerHTML=elementsArray[i].value;
   
    }
}







///module.exports = elementsArray;
