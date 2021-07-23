const CryptoJS = require("crypto-js");

var TOKEN_DB = [];

const btoa = (txt) => {
    return Buffer.from(txt).toString('base64');
}

const atob = (txt) => {
    return Buffer.from(txt, 'base64').toString();
}

const ENCODE = async (payload, key) => {
    return CryptoJS.TripleDES.encrypt(JSON.stringify(payload), key).toString();
};

const DECODE = async (token, key) => {
    return JSON.parse(CryptoJS.TripleDES.decrypt(token, key).toString(CryptoJS.enc.Utf8));
};

const VERIFY = async (token, key) => {
    console.log(TOKEN_DB);
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

exports.generate = async (payload, key) => {
    token = await ENCODE(payload, key);
    if (!JSON.stringify(TOKEN_DB).includes(token)) TOKEN_DB.push({ token: token, expire: Date.now() });
    else return { err: true, message: 'Token already exists' };
    return { err: false, message: { token: token } };
};

exports.verify = VERIFY;

exports.destroy = async (token, key) => {
    stats = await VERIFY(token, key);
    if (!stats.err) {
        TOKEN_DB = TOKEN_DB.filter(v => !(token === v.token));
        return { err: false, message: 'Token destroyed' };
    } else return stats;
};