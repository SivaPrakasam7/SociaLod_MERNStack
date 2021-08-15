module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking', 'headless'],
    Main: "`https://duckduckgo.com/?q=${this.query}`",
    Results: {
        Script: "return window.scrollTo(0, document.body.scrollHeight)",
        xpath: "//div[contains(@class,'result ')]",
        func: {
            Link: "elem.findElement(By.xpath(\".//a\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Title: "elem.findElement(By.xpath(\".//h2\")).then(e=>{return e.getText()}).catch(err=>{return null})",
            Description: "elem.findElement(By.xpath(\".//div[contains(@class,'result__snippet')]\")).getText()"
        }
    }
};
