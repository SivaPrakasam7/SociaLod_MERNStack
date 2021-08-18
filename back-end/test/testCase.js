const xsengine = require('../src/domain/XSEngine'),
    tokener = require('../src/domain/Tokener'),
    { walker } = require('../src/application/services/util_services/utils'),
    path = require('path');

require('dotenv').config();

const TestCase = {
    // Tokener Testcases
    async Tokenerfunc() {
        key = 'JHVUXWI*&@U(927gw2f3iyga9';
        enc = (await tokener.generate({ _id: '60f5046082e8f4290dba8fbf', name: 'siva' }, key)).message.token;
        console.table({ Encypted_Data: enc });
        console.table({ Valid_Token_Verification: await tokener.verify(enc, key) });
        console.table({ Valid_Token_Destory: await tokener.destroy(enc, key) });
        console.table({ Invalid_Token_Verification: await tokener.verify(enc, key) });
        console.table({ Invalid_Token_Destory: await tokener.destroy(enc, key) });
    },
    // XSEngine scrap engine
    async XSEnginefunc() {
        const avails = walker('../../../entities', 'js');
        console.table(avails);
        for (var s of avails) await xsengine.scrap('sivaprakasam7', require(s.path));
        console.log(xsengine.filter());
    },
    async Test() {
        await this.Tokenerfunc();
        await this.XSEnginefunc();
    }
};

TestCase.Test();