module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`https://www.youtube.com/c/${this.query}`",
    Profile: {
        Url: "/about",
        // Script:"document.getElementsByTagName('button')[1].click()",
        xpath: "//img[@id='img' and @width='80']",
        func: "elem.getAttribute('src')"
    },
    Name: {
        xpath: "//yt-formatted-string[contains(@class,'ytd-channel-name')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
    },
    Description: {
        xpath: "//div[contains(@id,'description-container')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Biodata: {
        xpath: "//div[contains(@id,'bio-container')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Details: {
        xpath: "//div[contains(@id,'details-container')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Links: {
        xpath: "//div[contains(@id,'links-container')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Stats: {
        xpath: "//div[@id='right-column' and contains(@class,'style-scope ytd-channel-about-metadata-renderer')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Social: {
        xpath: "//a[contains(@href,'https://www.linkedin.com/in/') or contains(@href,'https://www.facebook.com/') or contains(@href,'https://github.com/') or contains(@href,'https://www.pinterest.com/') or contains(@href,'https://www.instagram.com/') or contains(@href,'https://www.reddit.com/user/') or contains(@href,'https://twitter.com/') or contains(@href,'https://www.tiktok.com/@') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://medium.com/@') or contains(@href,'https://stackoverflow.com/users/')]",
        func: "elem.getAttribute('href')"
    }
};