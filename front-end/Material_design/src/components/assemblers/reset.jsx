import { useState } from "react";
import {
  Typography,
  Button,
  Grid,
  Box,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Email, Lock, Visibility, VisibilityOff } from "@material-ui/icons";
import CtextField from "../inputs/textfield";
import clsx from "clsx";
import useStyles from "../style";
import ResetSubmit from "../../fucntions/apiAccess/authendication/reset";

export default function Reset() {
  const [visible, setVisible] = useState(false),
    classes = useStyles();
  return (
    <Box
      className={clsx(classes.center, classes.padding)}
      boxShadow={3}
      borderRadius="borderRadius"
    >
      <form id="reset">
        <Typography variant="h4">Reset Here</Typography>
        <CtextField
          id="password"
          label="Password"
          visible={true}
          icon={<Email />}
        />
        <CtextField
          id="cpassword"
          label="Confrim Password"
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
          <Button onClick={ResetSubmit} color="primary" variant="contained">
            Change
          </Button>
        </Grid>
      </form>
    </Box>
  );
}
