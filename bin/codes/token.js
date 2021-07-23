const bcrypt = require('bcrypt');

var TOKEN_DB = [];

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
    return JSON.parse(decodeURI(atob(token).split('#')[0]));
};

const VERIFY = async (token, key) => {
    for (var i in TOKEN_DB) {
        if (TOKEN_DB[i].token === token) {
            payload = await DECODE(token);
            if ((Date.now() - TOKEN_DB[i].expire) < (process.env.EXPIRE || 1000000)) {
                TOKEN_DB[i].expire = Date.now();
                return { err: true, message: payload };
            } else return { err: false, meassage: 'Token expired' };
        }
    }
    return { err: false, message: 'Token not match' };
};

const generate = async (payload, key) => {
    token = await ENCODE(payload, key);
    if (!JSON.stringify(TOKEN_DB).includes(token)) {
        TOKEN_DB.push({ token: token, expire: Date.now() });
    }
    else return false;
    return { err: true, message: { token: token } };
};;

const verify = VERIFY;

const destroy = async (token, key) => {
    stats = await VERIFY(token, key);
    if (stats.err) {
        TOKEN_DB = TOKEN_DB.filter(v => !(token === v.token));
        return { err: true, message: 'Token destroyed' };
    } else return stats;
};

(async () => {
    console.log(await generate({ id: 'hello' }, 'key'));
    console.log(await verify('JTdCJTIyaWQlMjI6JTIyaGVsbG8lMjIlN0Qja2V5', 'key'));
    console.log(await destroy('JTdCJTIyaWQlMjI6JTIyaGVsbG8lMjIlN0Qja2V5', 'key'));
    console.log(await verify('JTdCJTIyaWQlMjI6JTIyaGVsbG8lMjIlN0Qja2V5', 'key'));
    console.log(await destroy('JTdCJTIyaWQlMjI6JTIyaGVsbG8lMjIlN0Qja2V5', 'key'));
})();