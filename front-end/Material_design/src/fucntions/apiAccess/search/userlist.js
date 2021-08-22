import { LinearProgress } from "@material-ui/core";
import { render } from "react-dom";
import Status from "../../basic/status";
import Validate from "../../basic/validate";
import Logout from "../account/logout";

export default async function UserSearch() {
  let form = document.getElementById("searchuser");
  if (Validate(form)) {
    render(<LinearProgress />, document.getElementById("status"));
    const info = await fetch(
      `${process.env.REACT_APP_BURL}/api/service/search`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${document.cookie.replace("CID=", "")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: form.name.value }),
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
      return info.message;
    } else if (info.message === "Token not match") Logout();
    else Status("error", info.message);
  }
}
