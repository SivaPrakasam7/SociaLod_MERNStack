import { Typography, Button, Grid, Box, Link } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import CtextField from "../inputs/textfield";
import clsx from "clsx";
import useStyles from "../style";
import ForgetSubmit from "../../fucntions/apiAccess/authendication/forget";

export default function Forget() {
  const classes = useStyles();
  return (
    <Box
      className={clsx(classes.center, classes.padding)}
      boxShadow={3}
      borderRadius="borderRadius"
    >
      <form id="forget">
        <Typography variant="h4">Password Reset</Typography>
        <CtextField id="email" label="Email" visible={true} icon={<Email />} />
        <Grid item>
          <Button onClick={ForgetSubmit} color="primary" variant="contained">
            Get Link
          </Button>
        </Grid>
        <Grid item>
          <Link className={classes.right} href="/#/signin">
            SignIn
          </Link>
        </Grid>
      </form>
    </Box>
  );
}
