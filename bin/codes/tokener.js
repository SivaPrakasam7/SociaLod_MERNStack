const bcrypt = require('bcrypt');

var VERIFYS = {
    tokens: ['JTdCJTIyaWQlMjI6JTIyaGVsbG8lMjIlN0Qja2V5'],
    expires: [1626806208895]
    // rtokens: ['JTIySlRkQ0pUSXlhV1FsTWpJNkpUSXlhR1ZzYkc4bE1qSWxOMFFqYTJWNSUyMiNrZXk=']
};

const btoa = (txt) => {
    return Buffer.from(txt).toString('base64');
}

const atob = (txt) => {
    return Buffer.from(txt, 'base64').toString();
}

const ENCODE = async (payload, key) => {
    // secret = btoa(key);
    // enc = String(payload);
    // for (var i = 0; i < key.length; i++) {
    //     enc = btoa(enc.replace(enc[i], key[key.lengh - i]));
    // }
    return btoa([encodeURI(JSON.stringify(payload)), key].join('#'));
};

const DECODE = async (token, key) => {
    // secret = btoa(key);
    // for (var i = 0; i < key.length; i++) {
    //     dec = atob(enc.replace(enc[i], key[key.lengh - i]));
    // }
    return JSON.parse(decodeURI(atob(token).split('#')[0]));
};

const GENERATE = async (payload, key) => {
    token = await ENCODE(payload, key);
    // rtoken = await ENCODE(token, key);
    if (!VERIFYS.tokens.includes(token)) {
        VERIFYS.tokens.push(token);
        VERIFYS.expires.push(Date.now());
        // VERIFYS.rtokens.push(rtoken);
    }
    else return false;
    console.log(VERIFYS);
    return { stats: true, token: token }; //, rfreshToken: rtoken
};

const VERIFY = async (token, key) => {
    if (VERIFYS.tokens.includes(token)) {
        payload = await DECODE(token);
        console.log(Date.now()- VERIFYS.expires[VERIFYS.tokens.indexOf(token)]);
        if ((Date.now()-VERIFYS.expires[VERIFYS.tokens.indexOf(token)]) < (process.env.EXPIRE || 100000)) {
            VERIFYS.expires[VERIFYS.tokens.indexOf(token)] = Date.now();
            console.log(VERIFYS);
            return { stats: true, cont: payload };
        } else return { stats: false, cont: 'Token expired' };
    } else return { stats: false, cont: 'Token not match' };
};

const DESTROY = async (token, key) => {
    stats = await VERIFY(token, key);
    if (stats.stats) {
        // rtoken = VERIFYS.rtokens[VERIFYS.tokens.indexOf(token)];
        VERIFYS.tokens = VERIFYS.tokens.filter(t => !(token === t));
        // VERIFYS.rtokens = VERIFYS.rtokens.filter(rt => !(rtoken === rt));
        return { stats: true, cont: 'Token destroyed' };
    } else return stats;
};

const generate = GENERATE;

const verify = VERIFY;

// const refresh = async (rtoken, key) => {
//     token = await DECODE(rtoken, key);
//     if (VERIFYS.rtokens.indexOf(rtoken) === VERIFYS.tokens.indexOf(token)) {
//         rfresh = await DESTROY(token, key);
//         if (rfresh.stats) {
//             return await GENERATE(await DECODE(token, key), key);
//         } else return rfresh;
//     } else return { stats: false, cont: 'Token not match' };
// };

const destroy = DESTROY;
// (async () => {
//     console.log(await generate({ id: 'hello' }, 'key'));
// })();
(async () => {
    console.log(Date.now());
    console.log(await verify('JTdCJTIyaWQlMjI6JTIyaGVsbG8lMjIlN0Qja2V5', 'key'));
})();
// (async () => {
//     console.log(await refresh('JTIySlRkQ0pUSXlhV1FsTWpJNkpUSXlhR1ZzYkc4bE1qSWxOMFFqYTJWNSUyMiNrZXk=', 'key'));
// })();


var TOKEN_DB = [];

const btoa = (txt) => {
    return Buffer.from(txt).toString('base64');
}

const atob = (txt) => {
    return Buffer.from(txt, 'base64').toString();
}

const ENCODE = async (payload, key) => {
    var enc = btoa(encodeURI([...JSON.stringify(payload)].reverse().join('')));
    var padd = '';
    var scrt = key;
    var len = Math.round(enc.length / scrt.length);
    scrt = btoa(scrt);
    // console.log(len, enc.length, (enc.length / len), scrt.length);
    scrt = scrt.slice(scrt.length - (enc.length / len));
    for (var i = 0; i < (enc.length / len); i++) {
        padd = padd + enc.slice(i * len, (i + 1) * len) + scrt[i];
    };
    return [...btoa(padd.slice(0, padd.length / 2) + enc.length + padd.slice(padd.length / 2)).replace('=', '.')].reverse().join('');
};

const DECODE = async (token, key) => {
    var dec = atob([...token].reverse().join('').replace('.', '='));
    var dpadd = '';
    var scrt = key;
    var div = (dec.length / 2);
    var dlen = parseInt(dec.slice(div - 1, div + 1));
    dec = dec.slice(0, div - 1) + dec.slice(div + 1);
    var len = Math.round(dlen / scrt.length);
    // console.log(len, dlen, (dlen / len),scrt.length);
    for (var i = 0; i < (dlen / len); i++) {
        dpadd = dpadd + dec.substr(i * (len + 1), len + 1).slice(0, len);
    };
    return JSON.parse([...decodeURI(atob(dpadd))].reverse().join(''));
};

const VERIFY = async (token, key) => {
    for (var i in TOKEN_DB) {
        if (TOKEN_DB[i].token === token) {
            payload = await DECODE(token, key);
            if ((Date.now() - TOKEN_DB[i].expire) < (process.env.EXPIRE || 1000000)) {
                TOKEN_DB[i].expire = Date.now();
                return { err: false, message: payload };
            } else return { err: true, meassage: 'Token expired' };
        }
    }
    return { err: true, message: 'Token not match' };
};

const generate = async (payload, key) => {
    token = await ENCODE(payload, key);
    if (!JSON.stringify(TOKEN_DB).includes(token)) TOKEN_DB.push({ token: token, expire: Date.now() });
    else return { err: true, message: 'Token already exists' };
    return { err: false, message: { token: token } };
};

const verify = VERIFY;

const destroy = async (token, key) => {
    stats = await VERIFY(token, key);
    if (!stats.err) {
        TOKEN_DB = TOKEN_DB.filter(v => !(token === v.token));
        return { err: false, message: 'Token destroyed' };
    } else return stats;
};

// Testcase
(async () => {
    key = 'JHVUXWI*&@U(927gw2f3iyga9';
    enc=(await generate({ _id: '60f5046082e8f4290dba8fbf', name: 'siva' }, key)).message.token;
    console.log(enc);
    console.log(await verify(enc, key));
    console.log(await destroy(enc, key));
    console.log(await verify(enc, key));
    console.log(await destroy(enc, key));
})();