function boardElement (id,value)
{
this.id =id;
this.value=value;
}
var elementsArray = new Array;

size=9;
function InitializeBoard(size) {

var ifContinue=false;

    for(var i=0;i<size;i++)
    {
        var check;
        for(var j=0;j<i;j++)
        {
            if(elementsArray[j].value==randValue) check++;
            if(check>2)
            {
                ifContinue = true;
            }
        }
        if(ifContinue==true){
            --i;
            continue;
        }
            randValue= Math.floor(Math.random()*4);
            elementsArray[i]= new boardElement(i,randValue);
    }

}



for(var i=0;i<size;i++)
    {
        console.log(elementsArray[i].value);
    }

module.exports = elementsArray;