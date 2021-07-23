module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`https://www.tiktok.com/@${this.username}`",
    Login: ['document.cookie="s_v_web_id=verify_7006b00f24f5c22d88359b4fe78a57a2"'],
    Profile: {
        xpath: "//img[@alt='']",
        func: "elem.getAttribute('src')"
    },
    Name: {
        xpath: "//h1[contains(@class,'share-sub-title')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
    },
    Follow: {
        xpath: "//h2[contains(@class,'count-infos')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Description: {
        xpath: "//h2[contains(@class,'share-desc mt10')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Vidoes: {
        Script: 'return window.scrollTo(0, 5000)',
        xpath: "//a[contains(@href,'video')]",
        func: "elem.getAttribute('href')"
    },
    Social: {
        xpath: "//a[contains(@href,'https://www.linkedin.com/in/') or contains(@href,'https://www.facebook.com/') or contains(@href,'https://github.com/') or contains(@href,'https://www.pinterest.com/') or contains(@href,'https://www.instagram.com/') or contains(@href,'https://www.reddit.com/user/') or contains(@href,'https://twitter.com/') or contains(@href,'https://youtube.com/c/') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://medium.com/@') or contains(@href,'https://stackoverflow.com/users/')]",
        func: "elem.getAttribute('href')"
    }
};