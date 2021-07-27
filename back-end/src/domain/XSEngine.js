const { Builder, By, Key, until } = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome');

module.exports = class Browser {
    constructor(username, edata) {
        this.username = username;
        this.url;
        this.edata = edata;
        this.data = {};
        this.options = new chrome.Options();
        this.dirver;
    }
    async scrap() {
        var tmp;
        try {
            for (const [k, v] of Object.entries(this.edata)) {
                if (k == "Options") {
                    // v.pop();
                    for (var arg of v) this.options.addArguments(`--${arg}`);
                    this.driver = chrome.Driver.createSession(new chrome.Options(this.options), new chrome.ServiceBuilder().build());
                } else if (k == "Main") {
                    this.url = eval(v);
                    this.data.Username = this.username;
                    this.data.Link = this.url;
                    await this.driver.get(this.url);
                } else if (k == "Login") {
                    for (var ck of v) await this.driver.executeScript(ck);
                    await this.driver.get(this.url);
                } else {
                    if (v.Url) await this.driver.get(this.url + v.Url);
                    if (v.Script) await this.driver.executeScript(v.Script);
                    this.data[k] = [];
                    for (var elem of await this.driver.wait(until.elementsLocated(By.xpath(v.xpath)), 5000).catch(() => { return [null] })) {
                        if (typeof v.func === "string" && elem) { this.data[k].push(await eval(v.func).catch(err => { return null })); }
                        else if (elem) {
                            var tmp = {};
                            for (const [k1, v1] of Object.entries(v.func)) { tmp[k1] = await eval(v1).catch(() => { return null }) };
                            const chk = Object.values(tmp).filter(Boolean);
                            if (chk.length) {
                                if (chk[0].length) { this.data[k].push(tmp); }
                            }
                        }
                    }
                    this.data[k] = [...new Set(this.data[k])];
                    for (var i of this.data[k]) Array.isArray(i) && i.length === 0 && this.data[k].pop(i);
                    while (typeof this.data[k] != "string") {
                        this.data[k] = this.data[k].length != 1 ? this.data[k] : this.data[k][0];
                        if (tmp === this.data[k]) break;
                        tmp = this.data[k];
                    }
                }
            }
        } catch (err) {
            return err;
        } finally {
            this.driver.quit();
        }
        return this.data;
    }
}