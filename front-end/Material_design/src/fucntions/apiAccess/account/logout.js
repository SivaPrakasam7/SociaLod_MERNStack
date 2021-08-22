import Status from "../../basic/status";

export default function Logout() {
  fetch(`${process.env.REACT_APP_BURL}/api/auth/logout`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${document.cookie.replace("CID=", "")}`,
      "Content-Type": "application/json",
    },
  });
  Status("success", "Logout successful!");
  document.cookie = "CID=; path=/";
  window.location = "/";
}
