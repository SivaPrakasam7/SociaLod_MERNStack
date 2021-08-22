import { LinearProgress } from "@material-ui/core";
import { render } from "react-dom";
import Status from "../../basic/status";
import Validate from "../../basic/validate";
import Logout from "../account/logout";

export default async function ReportUser(dt) {
  const form = document.getElementById("report");
  if (Validate(form)) {
    render(<LinearProgress />, document.getElementById("status"));
    const info = await fetch(
      `${process.env.REACT_APP_BURL}/api/service/report_user`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${document.cookie.replace("CID=", "")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid: dt._id, message: form.message.value }),
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
      Status("success", `${dt.Name} reported`);
      return true;
    } else if (info.message === "Token not match") Logout();
    else Status("error", info.message);
  }
}
