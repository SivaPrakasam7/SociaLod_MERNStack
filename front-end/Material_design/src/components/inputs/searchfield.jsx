import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import useStyles from "../style";
import Secure from "../../fucntions/basic/security";

export default function SearchField(props) {
  const classes = useStyles();
  return (
    <Grid item className={classes.ms}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>{props.label}</InputLabel>
        <Input
          onKeyDown={Secure}
          onPaste={Secure}
          className={classes.ms}
          id={props.id}
          name={props.id}
          type="search"
          style={{ textAlign: "center" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={props.click}>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Grid>
  );
}
