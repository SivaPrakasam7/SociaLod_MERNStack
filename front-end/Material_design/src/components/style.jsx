import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  textfield: {
    width: "16rem",
  },
  margin: {
    margin: "1rem",
  },
  medium: {
    height: "4rem !important",
    width: "4rem !important",
  },
  small: {
    height: "1.5rem",
    width: "1.5rem",
  },
  large: {
    height: "10rem !important",
    width: "10rem !important",
  },
  right: {
    marginLeft: "90%",
  },
  bright: {
    marginLeft: "50%",
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    "@media only screen and (max-width:426px)": {
      transform: "translate(-50%,-55%)",
    },
  },
  padding: {
    padding: theme.spacing(3),
  },
  bottomFixed: {
    "& a": {
      minWidth: "60px !important",
    },
    fontSize: 20,
    "& svg": {
      display: "none",
    },
    "@media only screen and (max-width:426px)": {
      "& svg": {
        display: "block",
      },
    },
  },
  main: {
    width: "75vw",
    height: "75vh",
    "@media only screen and (max-width:426px)": {
      width: "85vw",
    },
  },
  plate: {
    display: "flex",
    flexDirection: "column",
    width: "20rem",
    minHeight: "80vh",
    height: "fit-content",
    padding: theme.spacing(0.5),
  },
  msm: {
    margin: "0.1rem",
  },
  ps: {
    padding: "0.5rem",
    textAlign: "left",
  },
  card: {
    height: "fit-content",
  },
  ms: {
    margin: "0.5rem",
  },
  stickyBottom: {
    marginTop: "auto",
    marginBottom: 0,
  },
  topRight: {
    position: "absolute",
    top: "0.5rem",
    left: "auto",
    right: "0.5rem",
  },
}));
