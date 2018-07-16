window.onload = function() {
var clickCounter=0;
var gotMemo=0
 var rowNumber=0;     
 var strForId=rowNumber.toString();
function boardElement (id,value)
{
this.id =id;
this.value=value;
}
var elementsArray = new Array;

var size=25;


InitializeBoard(size);
createBoard(size);
setStyle(size);
// have to run function, otherwise it will display error with undifinied object

var showNumber=0;
var prevShowedId;
function show(){
    setTimeout(function(){  }, 2000);
    showNumber++;
    clickCounter++;
   
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

for(var i=0;i<size;i++)
    {
        console.log(elementsArray[i].value,elementsArray[i].id);
    }

///module.exports = elementsArray;
}