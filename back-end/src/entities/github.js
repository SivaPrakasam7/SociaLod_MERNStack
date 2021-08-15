module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`https://github.com/${this.query}`",
    Profile: {
        xpath: "//img[contains(@src,'https://avatars.githubusercontent.com/u/') and contains(@src,'?v=4')]",
        func: "elem.getAttribute('src')"
    },
    Name: {
        xpath: "//h1[contains(@class,'vcard-names')]",
        func: "elem.getText().then(res => { return   res.trim().split('\\n').filter(Boolean)})",
    },
    About: {
        xpath: "//div[contains(@class,'js-profile-editable-area d-flex flex-column d-md-block')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Achivements: {
        xpath: "//div[contains(@class,'border-top color-border-secondary pt-3 mt-3 d-none d-md-block')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img[contains(@src,'https://github.githubassets.com/')]\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img[contains(@src,'https://github.githubassets.com/')]\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})"
        }
    },
    Organization: {
        xpath: "//a[contains(@data-hovercard-type,'organization')]",
        func: {
            Link: "elem.getAttribute('href')",
            Payload: "elem.getAttribute('data-hydro-click')"
        }
    },
    Projects: {
        xpath: "//div[contains(@class,'pinned-item-list-item-content')]",
        func: {
            Link: "elem.findElement(By.xpath(\".//a[contains(@class,'text-bold flex-auto min-width-0')]\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Activity: {
        xpath: "//div[contains(@class,'TimelineItem-body')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Social: {
        xpath: "//a[contains(@href,'https://www.linkedin.com/in/') or contains(@href,'https://www.facebook.com/') or contains(@href,'https://www.pinterest.com/') or contains(@href,'https://www.instagram.com/') or contains(@href,'https://www.reddit.com/user/') or contains(@href,'https://twitter.com/') or contains(@href,'https://www.tiktok.com/@') or contains(@href,'https://youtube.com/c/') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://medium.com/@') or contains(@href,'https://stackoverflow.com/users/')]",
        func: "elem.getAttribute('href')"
    }
};