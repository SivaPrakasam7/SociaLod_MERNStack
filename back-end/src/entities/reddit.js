module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`https://www.reddit.com/user/${this.query}`",
    Profile: {
        xpath: "//img[contains(@class,'_2bLCGrtCCJIMNCZgmAMZFM') or contains(@class,'_2TN8dEgAQbSyKntWpSPYM7 _3Y33QReHCnUZm9ewFAsk8C')]",
        func: "elem.getAttribute('src')"
    },
    Name: {
        xpath: "//h1[contains(@class,'_3LM4tRaExed4x1wBfK1pmg')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
    },
    About: {
        xpath: "//div[contains(@class,'bVfceI5F_twrnRcVO1328')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Posts: {
        xpath: "//div[contains(@class,'_1qftyZQ2bhqP62lbPjoGAh _3Qkp11fjcAw9I9wtLo8frE _3KGXodqw9Ht3MoBpe8_gzB scrollerItem')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Trophy: {
        xpath: "//div[contains(@class,'_2CUZHyZpRYmdvLE9tOI-2L QY_PhyoOHbRd-_92ivr-m')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img[contains(@src,'https://www.redditstatic.com/')]\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            Content: "elem.findElement(By.xpath(\".//img[contains(@src,'https://www.redditstatic.com/')]\")).then(e=>{return e.getAttribute('title')}).catch(err=>{return null})"
        }
    },
    Social: {
        xpath: "//a[contains(@href,'https://www.linkedin.com/in/') or contains(@href,'https://www.facebook.com/') or contains(@href,'https://github.com/') or contains(@href,'https://www.pinterest.com/') or contains(@href,'https://www.instagram.com/') or contains(@href,'https://twitter.com/') or contains(@href,'https://www.tiktok.com/@') or contains(@href,'https://youtube.com/c/') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://medium.com/@') or contains(@href,'https://stackoverflow.com/users/')]",
        func: "elem.getAttribute('href')"
    }
};