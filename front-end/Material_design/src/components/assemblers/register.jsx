import { useState } from "react";
import {
  Avatar,
  Typography,
  Button,
  Grid,
  Box,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import {
  ConfirmationNumber,
  Info,
  Lock,
  Person,
  Phone,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import CtextField from "../inputs/textfield";
import BrowseProfile from "../../fucntions/basic/browseProfile";
import clsx from "clsx";
import useStyles from "../style";
import RegisterSubmit from "../../fucntions/apiAccess/authendication/register";

export default function Register(props) {
  const [visible, setVisible] = useState(false),
    classes = useStyles();
  return (
    <Box
      className={clsx(classes.center, classes.padding)}
      boxShadow={3}
      borderRadius="borderRadius"
    >
      <form id="register">
        <Typography variant="h4">SignUp Here</Typography>
        <input type="file" id="browse" hidden={true} onChange={BrowseProfile} />
        <IconButton
          onClick={() => {
            document.getElementById("browse").click();
          }}
        >
          <Avatar
            id="profile"
            className={classes.large}
            src="https://img.icons8.com/ios-glyphs/90/000000/video-stabilization.png"
          />
        </IconButton>
        <CtextField id="name" label="Name" visible={true} icon={<Person />} />
        <CtextField
          id="mobile"
          label="Mobile No"
          visible={true}
          icon={<Phone />}
        />
        <CtextField
          id="about"
          label="About you"
          visible={true}
          icon={<Info />}
        />
        <CtextField
          id="password"
          label="Password"
          visible={visible}
          icon={<Lock />}
          suffix={
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  visible ? setVisible(false) : setVisible(true);
                }}
              >
                {visible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <CtextField
          id="cpassword"
          label="Confrim Password"
          visible={visible}
          icon={<ConfirmationNumber />}
          suffix={
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  visible ? setVisible(false) : setVisible(true);
                }}
              >
                {visible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Grid item>
          <Button
            onClick={() => {
              RegisterSubmit(props.match.params.id);
            }}
            color="primary"
            variant="contained"
          >
            SignUp
          </Button>
        </Grid>
      </form>
    </Box>
  );
}
