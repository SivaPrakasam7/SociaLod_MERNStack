module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`${this.query}`",
    Social: {
        Script: "return window.scrollTo(0, document.body.scrollHeight)",
        xpath: "//a[contains(@href,'https://www.linkedin.com/in/') or contains(@href,'https://www.facebook.com/') or contains(@href,'https://github.com/') or contains(@href,'https://www.pinterest.com/') or contains(@href,'https://www.instagram.com/') or contains(@href,'https://www.reddit.com/user/') or contains(@href,'https://twitter.com/') or contains(@href,'https://www.tiktok.com/@') or contains(@href,'https://youtube.com/c/') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://medium.com/') or contains(@href,'https://stackoverflow.com/users/')]",
        func: "elem.getAttribute('href')"
    },
    Links: {
        xpath: "//a",
        func: "elem.getAttribute('href')"
    },
    Headings: {
        xpath: "//h1|//h2|//h3|//h4|//h5|//div[contains(@class,'head')]",
        func: "elem.getText()"
    },
    Contents: {
        xpath: "//body",
        func: "elem.getText()",
        pattern: /(.*?[^\:\-\,])(?:$|\n{2,})/g
    },
    Mails: {
        xpath: "//body",
        func: "elem.getText()",
        pattern: /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/g
    },
    Mobiles: {
        xpath: "//body",
        func: "elem.getText()",
        pattern: /([+]\d{2} ?)?\d{10}/g
    },
    Words: {
        xpath: "//body",
        func: "elem.getText()",
        pattern: /[A-Z]\w+/g
    },
    Raw: {
        xpath: "//body",
        func: "elem.getText()"
    }
};
