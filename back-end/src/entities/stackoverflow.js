module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`https://www.stackoverflow.com/users/${this.query}`",
    Profile: {
        xpath: "//img[contains(@src,'avatar')]",
        func: "elem.getAttribute('src')"
    },
    Name: {
        xpath: "//div[contains(@class,'grid--cell fw-bold')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
    },
    Description: {
        xpath: "//div[contains(@class,'grid--cell mt16 s-prose profile-user--bio ')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Details: {
        xpath: "//div[contains(@class,'grid--cell fl-shrink0 pr24 wmx3')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Communities: {
        xpath: "//li[contains(@class,'grid--cell profile-communities--item')]",
        func: {
            Link: "elem.findElement(By.xpath(\".//a[contains(@data-gps-track,'profile_link')]\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.findElement(By.xpath(\".//a[contains(@data-gps-track,'profile_link')]\")).then(e=>{return e.getText()}).catch(err=>{return null})"
        }
    },
    Badges: {
        xpath: "//div[contains(@class,'grid--cell s-card p16')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    TopPosts: {
        xpath: "//div[contains(@class,'grid--cell py12 bb bc-black-075 fs-body1 post-container')]",
        func: {
            Link: "elem.findElement(By.xpath(\".//a[contains(@class,'answer')]\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Social: {
        xpath: "//a[contains(@href,'https://www.linkedin.com/in/') or contains(@href,'https://www.facebook.com/') or contains(@href,'https://github.com/') or contains(@href,'https://www.pinterest.com/') or contains(@href,'https://www.instagram.com/') or contains(@href,'https://www.reddit.com/user/') or contains(@href,'https://twitter.com/') or contains(@href,'https://www.tiktok.com/@') or contains(@href,'https://youtube.com/c/') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://medium.com/@')]",
        func: "elem.getAttribute('href')"
    }
};