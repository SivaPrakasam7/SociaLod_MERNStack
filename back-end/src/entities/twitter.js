module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless', 'proxy-server=socks5://localhost:9050'],
    Main: "`https://www.twitter.com/${this.username}`",
    Profile: {
        xpath: "//img[contains(@src,'https://pbs.twimg.com/profile_images/')]",
        func: "elem.getAttribute('src')"
    },
    Name: {
        xpath: "//div[contains(@class,'css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
    },
    Intro: {
        xpath: "//div[contains(@class,'css-1dbjc4n r-1ifxtd0 r-ymttw5 r-ttdzmv')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean).slice(3)})"
    },
    Tweets: {
        Script: 'return window.scrollTo(0, 5000)',
        xpath: "//div[@data-testid='tweet']",
        func: {
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
            Img: "elem.findElement(By.xpath(\".//img[contains(@src,'https://pbs.twimg.com/media/')]\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a[contains(@href,'/status/') and not(contains(@href,'/photo/1'))]\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})"
        }
    },
    Social: {
        xpath: "//a[contains(@href,'https://www.linkedin.com/in/') or contains(@href,'https://www.facebook.com/') or contains(@href,'https://github.com/') or contains(@href,'https://www.pinterest.com/') or contains(@href,'https://www.instagram.com/') or contains(@href,'https://www.reddit.com/user/') or contains(@href,'https://www.tiktok.com/@') or contains(@href,'https://youtube.com/c/') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://medium.com/@') or contains(@href,'https://stackoverflow.com/users/')]",
        func: "elem.getAttribute('href')"
    }
};