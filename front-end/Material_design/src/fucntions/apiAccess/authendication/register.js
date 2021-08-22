import Validate from "../../basic/validate";
import { LinearProgress } from "@material-ui/core";
import { render } from "react-dom";
import Status from "../../basic/status";

export default async function RegisterSubmit(token) {
  const form = document.getElementById("register");
  console.log(document.getElementById('profile').getElementsByTagName('img')[0].src);
  if (Validate(form)) {
    if (form.password.value === form.cpassword.value) {
      render(<LinearProgress />, document.getElementById("status"));
      const info = await fetch(
        `${process.env.REACT_APP_BURL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            profile: document.getElementById('profile').getElementsByTagName('img')[0].src,
            name: form.name.value,
            mobileno: form.mobile.value,
            about: form.about.value,
            password: form.password.value,
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
      console.log(info);
      if (!info.err && info.message !== "Failed to fetch") {
        Status("success", "Registration successful!");
        document.cookie = `CID=${info.message.token}; path=/`;
        window.location = "/";
      } else Status("error", JSON.stringify(info.message));
    } else Status("error", "Password mismatch!");
  }
}
