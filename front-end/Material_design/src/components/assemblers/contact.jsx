import {
  Box,
  Avatar,
  Typography,
  Grid,
  Button,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import {
  Dialpad,
  VerifiedUser,
  Email,
  GitHub,
  LinkedIn,
  Message,
  Public,
  Subject,
  WhatsApp,
} from "@material-ui/icons";
import CtextField from "../inputs/textfield";
import useStyles from "../style";
import profile from "../../img/sivaprakasam.jpg";
import Mailcode from "../../fucntions/apiAccess/authendication/mailCode";
import MailMessage from "../../fucntions/apiAccess/authendication/message";

export default function Contact() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs justifyContent="center" alignItems="center">
        <Box
          className={classes.plate}
          boxShadow={3}
          borderRadius="borderRadius"
          margin="auto"
        >
          <div>
            <Grid item>
              <Avatar
                src={profile}
                className={classes.large}
                style={{ margin: "auto" }}
              />
            </Grid>
            <Typography variant="subtitle1">Siva prakasam</Typography>
            <Typography variant="body1">Web developer / Pentester</Typography>
            <form id="message">
              <form id="mail">
                <CtextField
                  id="email"
                  label="From"
                  visible={true}
                  icon={<Email />}
                  suffix={
                    <InputAdornment position="end">
                      <IconButton onClick={Mailcode}>
                        <VerifiedUser />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </form>
              <CtextField
                id="code"
                label="Verification code"
                visible={true}
                icon={<Dialpad />}
              />
              <CtextField
                id="subject"
                label="Subject"
                visible={true}
                icon={<Subject />}
              />
              <CtextField
                id="message"
                label="Message"
                visible={true}
                icon={<Message />}
              />
            </form>
            <Button
              onClick={MailMessage}
              color="primary"
              variant="outlined"
              className={classes.ms}
            >
              Send
            </Button>
          </div>
          <div>
            <IconButton
              href="mailto:prakasams22@gmail.com"
              color="secondary"
              size="medium"
            >
              <Email />
            </IconButton>
            <IconButton
              href="https://wa.me/916374399577"
              color="secondary"
              size="medium"
            >
              <WhatsApp />
            </IconButton>
            <IconButton
              href="https://sivaprakasam.educationhost.cloud"
              color="secondary"
              size="medium"
            >
              <Public />
            </IconButton>
            <IconButton
              href="https://github.com/SivaPrakasam7"
              color="secondary"
              size="medium"
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/siva-prakasam"
              color="secondary"
              size="medium"
            >
              <LinkedIn />
            </IconButton>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
