import { LinearProgress } from "@material-ui/core";
import { render } from "react-dom";
import Status from "../../basic/status";
import Validate from "../../basic/validate";
import Logout from "./logout";

export default async function AddMedia() {
  const form = document.getElementById("media");
  if (Validate(form)) {
    render(<LinearProgress />, document.getElementById("status"));
    const scrap = form.media.value
      .replace("https://", "")
      .replace("www.", "")
      .replace(".com", "")
      .replace("/users", "")
      .replace("/in", "")
      .replace("/c", "")
      .replace("@", "")
      .split("/");
    const info = await fetch(
      `${process.env.REACT_APP_BURL}/api/service/new_media`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${document.cookie.replace("CID=", "")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: scrap.slice(1).join("/"),
          site: scrap[0],
        }),
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
      Status("success", `${scrap[0]} Media added to your profile`);
      return true;
    } else if (info.message === "Token not match") Logout();
    else Status("error", info.message);
  }
}
