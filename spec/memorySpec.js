elementsArray = require('./../app/memory.js');

describe('testing memory initialization board',function(){
    it('should return random intiger greater than 0', function(){
      
        for(var i=0;i<8;i++)
        {
            expect(elementsArray[i].value).toBeLessThanOrEqual(3);
            expect(elementsArray[i].value).toBeGreaterThanOrEqual(0);
        }
        
  
    })
})