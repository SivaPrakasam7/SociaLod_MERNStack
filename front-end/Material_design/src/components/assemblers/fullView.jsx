import {
  AppBar,
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import useStyles from "../style";

export default function FullView(props) {
  const classes = useStyles();
  return (
    <Dialog fullScreen scroll="paper" open={props.open} onClose={props.onClose}>
      <AppBar style={{ position: "relative" }}>
        <DialogTitle>
          {props.data.Name}
          <IconButton style={{color:"snow"}} className={classes.topRight} onClick={props.onClose}>
            <Close />
          </IconButton>
        </DialogTitle>
      </AppBar>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs>
            <Avatar className={classes.large} src={props.data.Profile} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
