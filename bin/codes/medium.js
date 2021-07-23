module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`https://www.medium.com/@${this.username}`",
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
    }
};