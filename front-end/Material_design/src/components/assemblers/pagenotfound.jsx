import { Box, Typography } from "@material-ui/core";
import useStyles from "../style";
import clsx from "clsx";

export default function PageNotFound() {
  const classes = useStyles();
  return (
    <Box
      className={clsx(classes.center, classes.padding)}
      boxShadow={3}
      borderRadius="borderRadius"
    >
      <Typography className={classes.error} variant="h4">
        Page Not Found
        <br />
        Try Navigation Bar
      </Typography>
    </Box>
  );
}
