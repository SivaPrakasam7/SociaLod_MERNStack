module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`https://www.pinterest.com/${this.username}`",
    Profile: {
        xpath: "//img[contains(@class,'hCL kVc L4E MIw')]",
        func: "elem.getAttribute('src')"
    },
    Name: {
        xpath: "//img[contains(@class,'hCL kVc L4E MIw')]",
        func: "elem.getAttribute('alt')",
    },
    Images: {
        xpath: "//a[contains(@class,'boardLinkWrapper')]",
        func: {
            Link: "elem.getAttribute('href')",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
        }
    },
    Social: {
        xpath: "//a[contains(@href,'https://www.linkedin.com/in/') or contains(@href,'https://www.facebook.com/') or contains(@href,'https://github.com/') or contains(@href,'https://www.instagram.com/') or contains(@href,'https://www.reddit.com/user/') or contains(@href,'https://twitter.com/') or contains(@href,'https://www.tiktok.com/@') or contains(@href,'https://youtube.com/c/') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://medium.com/@') or contains(@href,'https://stackoverflow.com/users/')]",
        func: "elem.getAttribute('href')"
    }
};