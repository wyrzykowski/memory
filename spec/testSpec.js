var testy1 = require('./../app/test.js');

describe('testuje',function(){
    it('shuld return ok', function(){
        expect(testy1()).toBe('ok');
    })
})