function boardElement (id,value)
{
this.id =id;
this.value=value;
}
var elementsArray = new Array;

size=9;
function InitializeBoard(size) {


    for(var i=0;i<size;i++)
    {
        
            randValue= Math.floor(Math.random()*4);
            elementsArray[i]= new boardElement(i,randValue);
    }

}



for(var i=0;i<size;i++)
    {
        console.log(elementsArray[i].value);
    }

module.exports = elementsArray;