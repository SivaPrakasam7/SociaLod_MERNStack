import { LinearProgress } from "@material-ui/core";
import { render } from "react-dom";
import Status from "../../basic/status";
import Clear from "../../basic/clear";
import Logout from "./logout";

export default async function Myaccount() {
  render(<LinearProgress />, document.getElementById("status"));
  const info = await fetch(`${process.env.REACT_APP_BURL}/api/user/get`, {
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
    Clear();
    return info.message;
  } else if (info.message === "Token not match") Logout();
  else Status("error", info.message);
}
