module.exports = {
    Options: ['disable-notifications', 'disable-default-apps', 'disable-popup-blocking','headless'],
    Main: "`https://www.facebook.com/${this.query}`",
    Login: [`document.cookie="c_user=${process.env.FB_C_USER}"`, `document.cookie="xs=${process.env.FB_XS}"`],
    Profile: {
        xpath: "//*[name()='svg' and contains(@style,'height: 168px; width: 168px;')]/*[name()='g']/*[name()='image']",
        func: "elem.getAttribute('xlink:href')"
    },
    Name: {
        xpath: "//h1[contains(@class,'gmql0nx0 l94mrbxd p1ri9a11 lzcic4wl')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})",
    },
    Overview: {
        Url: '/about_overview',
        xpath: "//div[contains(@class,'dati1w0a tu1s4ah4 f7vcsfb0 discj3wi')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Work_and_education: {
        Url: '/about_work_and_education',
        xpath: "//div[contains(@class,'dati1w0a tu1s4ah4 f7vcsfb0 discj3wi')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Places: {
        Url: '/about_places',
        xpath: "//div[contains(@class,'dati1w0a tu1s4ah4 f7vcsfb0 discj3wi')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Contact_and_basic_info: {
        Url: '/about_contact_and_basic_info',
        xpath: "//div[contains(@class,'dati1w0a tu1s4ah4 f7vcsfb0 discj3wi')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Family_and_relationships: {
        Url: '/about_family_and_relationships',
        xpath: "//div[contains(@class,'dati1w0a tu1s4ah4 f7vcsfb0 discj3wi')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Details: {
        Url: '/about_details',
        xpath: "//div[contains(@class,'dati1w0a tu1s4ah4 f7vcsfb0 discj3wi')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Life_events: {
        Url: '/about_life_events',
        xpath: "//div[contains(@class,'dati1w0a tu1s4ah4 f7vcsfb0 discj3wi')]",
        func: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
    },
    Firends: {
        Url: '/friends',
        xpath: "//div[contains(@class,'rq0escxv rj1gh0hx buofh1pr ni8dbmo4 stjgntxs l9j0dhe7') or contains(@class,'bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a[contains(@class,'oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 q9uorilb mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 wkznzc2l oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l pioscnbf etr7akla')]\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Photos: {
        Url: '/photos',
        xpath: "//div[contains(@class,'rq0escxv rj1gh0hx buofh1pr ni8dbmo4 stjgntxs l9j0dhe7') or contains(@class,'bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a[contains(@class,'oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 a8c37x1j p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 datstx6m l9j0dhe7 k4urcfbm')]\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})"
        }
    },
    Vidoes: {
        Url: '/videos',
        xpath: "//div[contains(@class,'rq0escxv rj1gh0hx buofh1pr ni8dbmo4 stjgntxs l9j0dhe7') or contains(@class,'bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a[contains(@class,'oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 a8c37x1j p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 datstx6m l9j0dhe7 k4urcfbm')]\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})"
        }
    },
    CheckIns: {
        Url: '/map',
        xpath: "//div[contains(@class,'rq0escxv rj1gh0hx buofh1pr ni8dbmo4 stjgntxs l9j0dhe7') or contains(@class,'bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img[contains(@class,'ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi rq0escxv bixrwtb6')]\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img[contains(@class,'ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi rq0escxv bixrwtb6')]\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a[contains(@class,'oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 q9uorilb mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 wkznzc2l oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l pioscnbf etr7akla')]\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Movies: {
        Url: '/movies',
        xpath: "//div[contains(@class,'rq0escxv rj1gh0hx buofh1pr ni8dbmo4 stjgntxs l9j0dhe7') or contains(@class,'bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img[contains(@class,'ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi rq0escxv bixrwtb6')]\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img[contains(@class,'ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi rq0escxv bixrwtb6')]\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a[contains(@class,'oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 q9uorilb mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 wkznzc2l oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l pioscnbf etr7akla')]\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Likes: {
        // Script:'return window.scrollTo(0, document.body.scrollHeight)',
        Url: '/likes',
        xpath: "//div[contains(@class,'rq0escxv rj1gh0hx buofh1pr ni8dbmo4 stjgntxs l9j0dhe7') or contains(@class,'bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr')]",
        func: {
            Img: "elem.findElement(By.xpath(\".//img[contains(@class,'opwvks06 hop1g133 linmgsc8 t63ysoy8 ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi rq0escxv datstx6m bixrwtb6 k4urcfbm')]\")).then(e=>{return e.getAttribute('src')}).catch(err=>{return null})",
            AltText: "elem.findElement(By.xpath(\".//img[contains(@class,'opwvks06 hop1g133 linmgsc8 t63ysoy8 ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi rq0escxv datstx6m bixrwtb6 k4urcfbm')]\")).then(e=>{return e.getAttribute('alt')}).catch(err=>{return null})",
            Link: "elem.findElement(By.xpath(\".//a[contains(@class,'oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8')]\")).then(e=>{return e.getAttribute('href')}).catch(err=>{return null})",
            Content: "elem.getText().then(res => { return res.trim().split('\\n').filter(Boolean)})"
        }
    },
    Social: {
        xpath: "//a[contains(@href,'https://www.linkedin.com/in/') or contains(@href,'https://github.com/') or contains(@href,'https://www.pinterest.com/') or contains(@href,'https://www.instagram.com/') or contains(@href,'https://www.reddit.com/user/') or contains(@href,'https://twitter.com/') or contains(@href,'https://www.tiktok.com/@') or contains(@href,'https://youtube.com/c/') or contains(@href,'mailto:') or contains(@href,'https://t.me/') or contains(@href,'https://medium.com/@') or contains(@href,'https://stackoverflow.com/users/')]",
        func: "elem.getAttribute('href')"
    }
};