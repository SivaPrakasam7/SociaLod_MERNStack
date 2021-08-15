module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`https://www.medium.com/@${this.query}`",
    Profile: {
        Url: "/about",
        xpath: "//img[@role='presentation']",
        func: "elem.getAttribute('src')"
    },
    Name: {
        xpath: "//a//span",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
    },
    About: {
        xpath: "//div//h2[contains(text(),'About')]/following-sibling::div[1]/p",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Follow: {
        xpath: "//div//h4",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Social: {
        xpath: "//a[contains(@href,'https://www.linkedin.com/in/') or contains(@href,'https://www.facebook.com/') or contains(@href,'https://github.com/') or contains(@href,'https://www.pinterest.com/') or contains(@href,'https://www.instagram.com/') or contains(@href,'https://www.reddit.com/user/') or contains(@href,'https://twitter.com/') or contains(@href,'https://www.tiktok.com/@') or contains(@href,'https://youtube.com/c/') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://stackoverflow.com/users/')]",
        func: "elem.getAttribute('href')"
    }
};