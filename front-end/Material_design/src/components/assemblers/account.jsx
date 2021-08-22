import {
  Box,
  Avatar,
  Typography,
  Grid,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";
import {
  Edit,
  Email,
  Facebook,
  GitHub,
  Info,
  InsertLink,
  Instagram,
  LinkedIn,
  Person,
  Phone,
  Pinterest,
  Reddit,
  Twitter,
  WhatsApp,
  YouTube,
} from "@material-ui/icons";
import CtextField from "../inputs/textfield";
import useStyles from "../style";
import CKIE from "../../fucntions/basic/checkCK";
import Logout from "../../fucntions/apiAccess/account/logout";
import Myaccount from "../../fucntions/apiAccess/account/account";
import EditUser from "../../fucntions/apiAccess/account/editUser";
import DeleteUser from "../../fucntions/apiAccess/account/deleteUser";
import AddMedia from "../../fucntions/apiAccess/account/addMedia";
import DeleteMedia from "../../fucntions/apiAccess/account/deleteMedia";
import BrowseProfile from "../../fucntions/basic/browseProfile";
import { useState, useEffect } from "react";

export default function Account() {
  const classes = useStyles(),
    [open, setOpen] = useState(false),
    [open1, setOpen1] = useState(false),
    [info, setInfo] = useState();
  let [change, setChange] = useState(0);
  if (!CKIE()) window.location = "#/signin";
  useEffect(() => {
    Myaccount().then((obj) => setInfo(obj));
  }, [change]);
  return (
    <Grid container>
      <Grid item xs justifyContent="center" alignItems="center">
        {info && (
          <Box
            className={classes.plate}
            boxShadow={3}
            borderRadius="borderRadius"
            margin="auto"
          >
            <Dialog
              open={open}
              onClose={() => {
                setOpen(false);
              }}
            >
              <DialogTitle>Edit Info</DialogTitle>
              <DialogContent
                dividers
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <form id="edit">
                  <input
                    type="file"
                    id="browse"
                    hidden={true}
                    onChange={BrowseProfile}
                  />
                  <IconButton
                    onClick={() => {
                      document.getElementById("browse").click();
                    }}
                  >
                    <Avatar
                      id="profile"
                      className={classes.large}
                      src={info.Profile}
                    />
                  </IconButton>
                  <CtextField
                    value={info.Name}
                    id="name"
                    label="Name"
                    visible={true}
                    icon={<Person />}
                  />
                  <CtextField
                    value={info.MobileNo}
                    id="mobile"
                    label="Mobile No"
                    visible={true}
                    icon={<Phone />}
                  />
                  <CtextField
                    value={info.About}
                    id="about"
                    label="About you"
                    visible={true}
                    icon={<Info />}
                  />
                </form>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={async () => {
                    (await EditUser()) &&
                      (() => {
                        setOpen(false);
                        setChange((change += 1));
                      })();
                  }}
                  color="primary"
                >
                  Update
                </Button>
                <Button
                  onClick={() => {
                    setOpen(false);
                  }}
                  color="primary"
                >
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              open={open1}
              onClose={() => {
                setOpen1(false);
              }}
            >
              <DialogTitle>Confirmation</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure to delete your account permenently?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={DeleteUser} color="secondary">
                  Delete
                </Button>
                <Button
                  onClick={() => {
                    setOpen1(false);
                  }}
                  color="primary"
                >
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
            <div className={classes.ms}>
              <Grid item>
                <Avatar
                  className={classes.large}
                  style={{ margin: "auto" }}
                  src={info.Profile}
                />
                <IconButton
                  onClick={() => {
                    setOpen(true);
                  }}
                  style={{ marginTop: "-3rem" }}
                  className={classes.right}
                  color="primary"
                  size="medium"
                >
                  <Edit />
                </IconButton>
              </Grid>
              <Typography variant="subtitle1">{info.Name}</Typography>
              <Typography variant="body1">{info.About}</Typography>
              <form id="media">
                <CtextField
                  id="media"
                  label="Social Media Link"
                  visible={true}
                  icon={<InsertLink />}
                />
              </form>
              <Button
                onClick={async () => {
                  (await AddMedia()) && setChange((change += 1));
                }}
                color="primary"
                variant="outlined"
                className={classes.ms}
              >
                Add
              </Button>
              <Button
                onClick={async () => {
                  (await DeleteMedia()) && setChange((change += 1));
                }}
                color="primary"
                variant="outlined"
                className={classes.ms}
              >
                Remove
              </Button>
            </div>
            <div className={classes.ms}>
              {info.Email && (
                <IconButton
                  href={`mailto:${info.Email}`}
                  color="secondary"
                  size="medium"
                >
                  <Email />
                </IconButton>
              )}
              {info.MobileNo && (
                <IconButton
                  href={`https://wa.me/${info.MobileNo}`}
                  color="secondary"
                  size="medium"
                >
                  <WhatsApp />
                </IconButton>
              )}
              {info.facebook && (
                <IconButton
                  href={info.facebook.Link}
                  color="secondary"
                  size="medium"
                >
                  <Facebook />
                </IconButton>
              )}
              {info.github && (
                <IconButton
                  href={info.github.Link}
                  color="secondary"
                  size="medium"
                >
                  <GitHub />
                </IconButton>
              )}
              {info.linkedin && (
                <IconButton
                  href={info.linkedin.Link}
                  color="secondary"
                  size="medium"
                >
                  <LinkedIn />
                </IconButton>
              )}
              {info.instagram && (
                <IconButton
                  href={info.instagram.Link}
                  color="secondary"
                  size="medium"
                >
                  <Instagram />
                </IconButton>
              )}
              {info.medium && (
                <IconButton
                  href={info.medium.Link}
                  color="secondary"
                  size="medium"
                ></IconButton>
              )}
              {info.stackoverflow && (
                <IconButton
                  href={info.stackoverflow.Link}
                  color="secondary"
                  size="medium"
                ></IconButton>
              )}
              {info.tiktok && (
                <IconButton
                  href={info.tiktok.Link}
                  color="secondary"
                  size="medium"
                ></IconButton>
              )}
              {info.twitter && (
                <IconButton
                  href={info.twitter.Link}
                  color="secondary"
                  size="medium"
                >
                  <Twitter />
                </IconButton>
              )}
              {info.pinterest && (
                <IconButton
                  href={info.pinterest.Link}
                  color="secondary"
                  size="medium"
                >
                  <Pinterest />
                </IconButton>
              )}
              {info.reddit && (
                <IconButton
                  href={info.reddit.Link}
                  color="secondary"
                  size="medium"
                >
                  <Reddit />
                </IconButton>
              )}
              {info.youtube && (
                <IconButton
                  href={info.youtube.Link}
                  color="secondary"
                  size="medium"
                >
                  <YouTube />
                </IconButton>
              )}
            </div>
            <div className={classes.stickyBottom}>
              <Button
                onClick={() => {
                  setOpen1(true);
                }}
                color="secondary"
              >
                Delete
              </Button>
              <Button
                onClick={Logout}
                color="primary"
                className={classes.bright}
              >
                Logout
              </Button>
            </div>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}
