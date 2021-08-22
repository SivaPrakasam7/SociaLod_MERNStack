import { LinearProgress } from "@material-ui/core";
import { render } from "react-dom";
import Status from "../../basic/status";
import Logout from "../account/logout";

export default async function UserView(id) {
  render(<LinearProgress />, document.getElementById("status"));
  const info = await fetch(
    `${process.env.REACT_APP_BURL}/api/service/view_user`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${document.cookie.replace("CID=", "")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid: id }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
  if (!info.err && info.message !== "Failed to fetch") {
    Status("success", "ok");
    window.scroll({
      top: 1000,
      left: 1000,
      behavior: "smooth",
    });
    return info.message;
  } else if (info.message === "Token not match") Logout();
  else Status("error", info.message);
}
