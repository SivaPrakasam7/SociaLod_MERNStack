import { FormControl, InputLabel, Input, Grid } from '@material-ui/core';
import useStyles from '../style';
import Secure from '../../fucntions/basic/security';

export default function CtextField(props) {
    const classes = useStyles();
    return (
        <Grid item className={classes.margin}>
            <FormControl className={classes.textfield}>
                <InputLabel>{props.label}</InputLabel>
                <Input defaultValue={props.value} id={props.id} name={props.id} type={props.visible ? "text" : "password"} startAdornment={props.icon} endAdornment={props.suffix} onKeyDown={Secure} onPaste={Secure} />
            </FormControl>
        </Grid>
    );
}