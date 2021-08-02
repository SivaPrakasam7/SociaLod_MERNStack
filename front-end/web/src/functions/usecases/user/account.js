import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Logout from "../actions/logout";
import Title from "../../../components/views/title";
import Textfield from "../../../components/inputs/textfield";
import Profile from "../../../components/views/profile";
import Icon from "../../../components/intract/icon";
import Licon from "../../../components/intract/licon";
import Link from "../../../components/views/link";
import Viewpanel from "../actions/view";
import Paragraph from "../../../components/views/paragraph";
import Add from "./add";
import Remove from "./remove";

export default async function Myaccount() {
    const info = await fetch('http://192.168.43.175:5000/api/user/get', { method: "GET", headers: { 'Authorization': `Bearer ${document.cookie.replace("CID=", "")}`, 'Content-Type': 'application/json' } })
        .then(res => { return res.json() })
        .then(data => { return data })
        .catch(err => { return err });
    if (!info.err && (info.message !== "Failed to fetch")) {
        var data = info.message;
        var template = (<div>{data && <div className="Glass-plate searchplate">
            <Link align="left fsize" click={() => { Viewpanel(data) }} title="View" />
            <Profile src={data.Profile} />
            <Title align="h2" title={data.Name} />
            <Paragraph cont={data.About} />
            <Textfield type="text" id="media" icon="https://img.icons8.com/ios-filled/50/ffffff/business-network.png" cont="add social links" />
            <div>
                <Icon align="margin" src='https://img.icons8.com/ios-glyphs/30/ffffff/add--v1.png' click={Add} />
                <Icon align="margin" src='https://img.icons8.com/ios-glyphs/30/ffffff/minus.png' click={Remove} />
            </div>
            <div className="padding bottom" id="Sociallinks">
                <Licon align="margin" src="https://img.icons8.com/material-sharp/24/ffffff/mail.png" link={"mailto:" + data.Email} />
                <Licon align="margin" src="https://img.icons8.com/material-outlined/24/ffffff/phone.png" link={"https://wa.me/" + data.MobileNo} />
                {data.facebook && <Licon align="margin" src="https://img.icons8.com/material-rounded/24/ffffff/facebook.png" link={data.facebook.Link} />}
                {data.github && <Licon align="margin" src="https://img.icons8.com/material-outlined/24/ffffff/github.png" link={data.github.Link} />}
                {data.instagram && <Licon align="margin" src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" link={data.instagram.Link} />}
                {data.linkedin && <Licon align="margin" src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-2--v1.png" link={data.linkedin.Link} />}
                {data.medium && <Licon align="margin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADW0lEQVRoge2YzYtXVRjHP98ro4lvP8lU0sSEUBf5klqLNi1UcONL6EL6A8KFC3GhIhgaQRThLkhxIVaLkCDBVqIwEETpLMKdmjI6ZebLmC/DYOPT4t6r53e75865x3Ej5wPDnLfne85zn/N77rkHEolEIpFIvDgoZJCZLQWWA68BHeAOcA3ok/TbsyzAzCYDc4CJwD/AVUmP2up4HTGzDrAT+AB4vUHjd+Ab4AtJd0MnNjMBS4BFQOZ0DQO/SroaqgUeR8xsG/Ax8HILrZvAXkmHQgab2TvAAl838LOkKw32W4F+ST9B95PAzMab2RHgS9o5ATAD+MrMDpvZ+KaBZrYAvxOQP+C3zWyax3478C1w2syWlwZlZwYcBza1W38t3wObJVnNInqA9UCjswXXJZ2p2E8ABnj6oE9I2uBG5ABj4wTA+8B+T98bhDkBMNvMqjtjLd27ZZ2ZTc8AzGwJsKfNSgPYW4a9QtOWqqM6/t1KvQdYVUbkcyq/lzEgAz5xG4pMOKWlztwiw5WsrBmzMjOzxeTheh6sM7OFTn1mhMZLwFR4krLfqhmzImPsfhc+Njrl6ZEaneL/JI/G3AxYHSkeyhqn3HZblZRpuOPp72TAvEjxUFz9CZEaZZarfa9QODI7UjyUV51yT6RGaedzZFoG/BspHop7APzfCzKQ0m7E0z+SAX9Giofyh1Nufaqt2A16+gcz8tPr88TVH47UKO18p+vBDPgxUjyUk045+JhfoYyEz/5uBvwAPI6cYDRGgBNO/U6kziCApCG6t2rJpUzSNeBY5ASjcVSSO/H1CI17ku479bM1Y86V56t9wFDEJE0MAR+5DZIe0D4qA5X6uZoxZ7Nign7gw5YTjMb2ItpVLrTQMOBipa23Ur8P9D058Uo6BnzWYpImPpV0xNN3GXgQqNMv6V6lrZfuTPidpIddR3dJu8gjE/uSHAF2S/J+20h6DPzC6C/HYaDPY7+DPEHdJP8g9F4+vAccBJYFLL6kD9ghqRr6WorPB5/+I6BX0o0G+2XA35IGoPk6KAO2kF8HrSH/LqgyBJwCvgaOF08rGDObT+7MRKf5Nvl10O02WqEXdJOAN4FZxd9f5Kn0fJGJojGzccArFBd0km49i14ikUgkEolEIvHi8x/gwPL6L+JGuAAAAABJRU5ErkJggg==" link={data.medium.Link} />}
                {data.pinterest && <Licon align="margin" src="https://img.icons8.com/material-rounded/30/ffffff/pinterest.png" link={data.pinterest.Link} />}
                {/* {data.portfolio && <Licon align="margin" src="https://img.icons8.com/material-outlined/24/ffffff/github.png" link={data.portfolio.Link} />} */}
                {data.reddit && <Licon align="margin" src="https://img.icons8.com/ios-glyphs/24/ffffff/reddit.png" link={data.reddit.Link} />}
                {data.stackoverflow && <Licon align="margin" src="https://img.icons8.com/windows/32/ffffff/stackoverflow.png" link={data.stackoverflow.Link} />}
                {data.tiktok && <Licon align="margin" src="https://img.icons8.com/ios-glyphs/30/ffffff/tiktok.png" link={data.tiktok.Link} />}
                {data.twitter && <Licon align="margin" src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png" link={data.twitter.Link} />}
                {data.youtube && <Licon align="margin" src="https://img.icons8.com/material-rounded/24/ffffff/youtube-play.png" link={data.youtube.Link} />}
            </div>
            <Link align="left fsize" click={Logout} title="Logout" />
        </div>
        }</div>);
        render(template,document.getElementById("myaccount"));
    } else {
        if ((info.message === 'Token not match') || (info.message === "Failed to fetch")) {
            Logout();
        }
        render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
    }
}