import { Typography, Button, Grid, Box, Link } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import CtextField from "../inputs/textfield";
import clsx from "clsx";
import useStyles from "../style";
import SignUpSubmit from "../../fucntions/apiAccess/authendication/signup";

export default function SignUp() {
  const classes = useStyles();
  return (
    <Box
      className={clsx(classes.center, classes.padding)}
      boxShadow={3}
      borderRadius="borderRadius"
    >
      <form id="signup">
        <Typography variant="h4">SignUp</Typography>
        <CtextField id="email" label="Email" visible={true} icon={<Email />} />
        <Grid item>
          <Button onClick={SignUpSubmit} color="primary" variant="contained">
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
