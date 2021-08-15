const XSEngine = require('../src/domain/XSEngine'),
    tokener = require('../src/domain/Tokener');

// Tokener Testcases
(async () => {
    key = 'JHVUXWI*&@U(927gw2f3iyga9';
    enc = (await tokener.generate({ _id: '60f5046082e8f4290dba8fbf', name: 'siva' }, key)).message.token;
    console.log(`Encypted Data : ${enc}`);
    console.log(`Valid Token Verification : %o`, await tokener.verify(enc, key));
    console.log(`Valid Token Destory : %o`, await tokener.destroy(enc, key));
    console.log(`Invalid Token Verification : %o`, await tokener.verify(enc, key));
    console.log(`Invalid Token Destory : %o`, await tokener.destroy(enc, key));
})();

// XSEngine scrap engine
// XSEngine.scrap('sivaprakasam7', require('../src/entities/github'))
//     .then((rslt) => { console.log(rslt) })
//     .catch((err) => { console.log(err) });