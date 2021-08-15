module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking'],
    Main: "`https://in.search.yahoo.com/search?p=${this.query}`",
    Results: {
        Script: "return window.scrollTo(0, document.body.scrollHeight)",
        xpath: "//div[contains(@class,'relsrch')]",
        func: {
            Link: "elem.findElement(By.xpath(\".//a\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Title: "elem.findElement(By.xpath(\".//h3\")).then(e=>{return e.getText()}).catch(err=>{return null})",
            Description: "elem.findElement(By.xpath(\".//p\")).getText()"
        }
    }
};
