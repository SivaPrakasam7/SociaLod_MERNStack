module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`https://www.linkedin.com/in/${this.query}`",
    Login: [`document.cookie="li_at=${process.env.LN_LI_AT}}"`],
    Profile: {
        Script: 'return window.scrollTo(0, 1000)',
        xpath: "//img[contains(@class,'pv-top-card__photo')]",
        func: "elem.getAttribute('src')"
    },
    Name: {
        Script: 'return window.scrollTo(0, 2000)',
        xpath: "//img[contains(@class,'pv-top-card__photo')]",
        func: "elem.getAttribute('alt')",
    },
    Intro: {
        Script: 'return window.scrollTo(0, 3000)',
        xpath: "//div[contains(@class,'display-flex justify-space-between pt2')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Activity: {
        Script: 'return window.scrollTo(0, 4000)',
        xpath: "//ul//li[contains(@class,'pv-recent-activity-item-v2 pv-recent-activity-item-v2--expanded ember-view')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    About: {
        Script: 'return window.scrollTo(0, 5000)',
        xpath: "//section[contains(@class,'pv-profile-section pv-about-section artdeco-card p5 mt4 ember-view')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Experience: {
        Script: 'return window.scrollTo(0, 6000)',
        xpath: "//ul//li[contains(@class,'pv-entity__position-group-pager pv-profile-section__list-item ember-view')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Education: {
        Script: 'return window.scrollTo(0, 7000)',
        xpath: "//ul//li[contains(@class,'pv-profile-section__list-item pv-education-entity pv-profile-section__card-item ember-view')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Certification: {
        Script: 'return window.scrollTo(0, 8000)',
        xpath: "//ul//li[contains(@class,'pv-profile-section__sortable-item pv-certification-entity ember-view')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Volunteer: {
        Script: 'return window.scrollTo(0, 9000)',
        xpath: "//ul//li[contains(@class,'pv-profile-section__list-item pv-volunteering-entity pv-profile-section__card-item ember-view')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Skills: {
        Script: 'return window.scrollTo(0, 10000)',
        xpath: "//ol//li[contains(@class,'pv-skill-category-entity__top-skill pv-skill-category-entity pb3 pt4 pv-skill-endorsedSkill-entity relative ember-view')]",
        func: {
            Link: "elem.findElement(By.xpath(\".//a\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Interest: {
        Script: 'return window.scrollTo(0, 11000)',
        xpath: "//ul//li[contains(@class,'pv-interest-entity pv-profile-section__card-item ember-view')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Contact_info: {
        Script: 'return window.scrollTo(0, 12000)',
        Url: '/detail/contact-info',
        xpath: "//div[contains(@class,'pv-profile-section__section-info section-info')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Social: {
        xpath: "//a[contains(@href,'https://www.facebook.com/') or contains(@href,'https://github.com/') or contains(@href,'https://www.pinterest.com/') or contains(@href,'https://www.instagram.com/') or contains(@href,'https://www.reddit.com/user/') or contains(@href,'https://twitter.com/') or contains(@href,'https://www.tiktok.com/@') or contains(@href,'https://youtube.com/c/') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://medium.com/@') or contains(@href,'https://stackoverflow.com/users/')]",
        func: "elem.getAttribute('href')"
    }
};