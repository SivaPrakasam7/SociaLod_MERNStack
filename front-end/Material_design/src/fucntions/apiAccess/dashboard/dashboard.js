import { LinearProgress } from "@material-ui/core";
import { render } from "react-dom";
import Status from "../../basic/status";

export default async function Dashboard() {
  render(<LinearProgress />, document.getElementById("status"));
  const info = await fetch(`${process.env.REACT_APP_BURL}/api/dashboard`, {
    method: "get",
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
    Status("success", "Dashboard updated!");
    return info;
  } else Status("error", info.message);
}
