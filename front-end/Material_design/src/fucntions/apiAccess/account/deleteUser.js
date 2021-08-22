import { LinearProgress } from "@material-ui/core";
import { render } from "react-dom";
import Status from "../../basic/status";
import Logout from "./logout";

export default async function DeleteUser() {
  render(<LinearProgress />, document.getElementById("status"));
  const info = await fetch(`${process.env.REACT_APP_BURL}/api/user/delete`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${document.cookie.replace("CID=", "")}`,
      "Content-Type": "application/json",
    },
  })
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
    Status("success", "Your account deleted successfuly!");
    window.location = "#/";
  } else if (info.message === "Token not match") Logout();
  else Status("error", info.message);
}
