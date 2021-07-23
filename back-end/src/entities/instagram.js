module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`https://www.instagram.com/${this.username}`",
    Login: [`document.cookie="sessionid=${process.env.INSTA_ID}"`],
    Profile: {
        xpath: "//img[contains(@alt,'Profile') or contains(@alt,'profile')]",
        func: "elem.getAttribute('src')"
    },
    Name: {
        xpath: "//h2[contains(@class,'_7UhW9       fKFbl yUEEX   KV-D4              fDxYl')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
    },
    Follow_posts: {
        xpath: "//ul[contains(@class,'k9GMp')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
    },
    About: {
        xpath: "//div[contains(@class,'-vDIg')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
    },
    Images: {
        xpath: "//div[contains(@class,'v1Nh3 kIKUG  _bz0w')]",
        func: {
            Link: "elem.findElement(By.xpath(\".//a[contains(@href,'/p/')]\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Img: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
        }
    },
    Social: {
        xpath: "//a[contains(@href,'https://www.linkedin.com/in/') or contains(@href,'https://www.facebook.com/') or contains(@href,'https://github.com/') or contains(@href,'https://www.pinterest.com/') or contains(@href,'https://www.reddit.com/user/') or contains(@href,'https://twitter.com/') or contains(@href,'https://www.tiktok.com/@') or contains(@href,'https://youtube.com/c/') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://medium.com/@') or contains(@href,'https://stackoverflow.com/users/')]",
        func: "elem.getAttribute('href')"
    }
};