const tokener = require('../../src/domain/Tokener');
// Testcase
(async () => {
    key = 'JHVUXWI*&@U(927gw2f3iyga9';
    enc = (await tokener.generate({ _id: '60f5046082e8f4290dba8fbf', name: 'siva' }, key)).message.token;
    console.log(enc);
    console.log(await tokener.verify(enc, key));
    console.log(await tokener.destroy(enc, key));
    console.log(await tokener.verify(enc, key));
    console.log(await tokener.destroy(enc, key));
})();