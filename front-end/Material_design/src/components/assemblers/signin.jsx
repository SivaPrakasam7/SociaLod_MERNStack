import { useState } from "react";
import {
  Typography,
  Button,
  Grid,
  Box,
  InputAdornment,
  IconButton,
  Link,
} from "@material-ui/core";
import { Email, Lock, Visibility, VisibilityOff } from "@material-ui/icons";
import CtextField from "../inputs/textfield";
import clsx from "clsx";
import useStyles from "../style";
import LoginSubmit from "../../fucntions/apiAccess/authendication/login";

export default function SignIn() {
  const [visible, setVisible] = useState(false),
    classes = useStyles();
  return (
    <Box
      className={clsx(classes.center, classes.padding)}
      boxShadow={3}
      borderRadius="borderRadius"
    >
      <form id="login">
        <Typography variant="h4">SignIn</Typography>
        <CtextField id="email" label="Email" visible={true} icon={<Email />} />
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
        <Grid item>
          <Button onClick={LoginSubmit} color="primary" variant="contained">
            SignIn
          </Button>
        </Grid>
        <Grid item>
          <Link href="/#/forget">Forget?</Link>
          <Link className={classes.bright} href="/#/signup">
            SignUp
          </Link>
        </Grid>
      </form>
    </Box>
  );
}
