import {
  Box,
  Card,
  Avatar,
  Typography,
  Grid,
  Button,
  IconButton,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";
import {
  Email,
  WhatsApp,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Pinterest,
  Reddit,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import SearchField from "../inputs/searchfield";
import clsx from "clsx";
import useStyles from "../style";
import CKIE from "../../fucntions/basic/checkCK";
import UserSearch from "../../fucntions/apiAccess/search/userlist";
import UserView from "../../fucntions/apiAccess/search/getUser";
import FullView from "./fullView";
import { useState } from "react";
import Medium from "../icons/medium";
import TikTok from "../icons/tiktok";
import StackOverflow from "../icons/stackoverflow";
import ReportUser from "../../fucntions/apiAccess/search/reportUser";
import ConnectUser from "../../fucntions/apiAccess/search/connectUser";

export default function Search() {
  const classes = useStyles(),
    [info, setInfo] = useState(null),
    [pinfo, setPinfo] = useState(null),
    [view, setView] = useState(false),
    [open, setOpen] = useState(false);
  if (!CKIE()) window.location = "#/signin";
  return (
    <Grid container spacing={3}>
      {pinfo && (
        <FullView
          open={view}
          onClose={() => {
            setView(false);
          }}
          data={pinfo}
        />
      )}
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>Report user</DialogTitle>
        <DialogContent>
          <form id="report">
            <TextField id="message" label="About this user" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            onClick={async () => {
              (await ReportUser(pinfo)) && setOpen(false);
            }}
          >
            Report
          </Button>
          <Button
            color="primary"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Grid item xs justifyContent="center" alignItems="center">
        <Box
          className={classes.plate}
          boxShadow={3}
          borderRadius="borderRadius"
          margin="auto"
        >
          <form id="searchuser">
            <SearchField
              label="name"
              id="name"
              click={async () => {
                setInfo((await UserSearch()) || []);
              }}
            />
          </form>
          {(info &&
            info.map((p, i) => (
              <Card
                key={i}
                onClick={async () => {
                  setPinfo((await UserView(p._id)) || null);
                }}
                className={classes.msm}
              >
                <CardActionArea className={clsx(classes.card, classes.ps)}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <Avatar className={classes.medium} src={p.Profile} />
                        </td>
                        <td>
                          <Typography variant="subtitle1">{p.Name}</Typography>
                          <Typography variant="body1">{p.About}</Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CardActionArea>
              </Card>
            ))) || (
            <Typography variant="h5" color="textSecondary">
              Search by username
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs justifyContent="center" alignItems="center">
        {(pinfo && (
          <Box
            className={classes.plate}
            boxShadow={3}
            borderRadius="borderRadius"
            margin="auto"
          >
            <div className={classes.ms}>
              <Grid item>
                <Avatar
                  className={classes.large}
                  style={{ margin: "auto" }}
                  src={pinfo.Profile}
                />
              </Grid>
              <Typography variant="subtitle1">{pinfo.Name}</Typography>
              <Typography variant="body1">{pinfo.About}</Typography>
              <Button
                onClick={() => {
                  ConnectUser(pinfo);
                }}
                color="primary"
                variant="outlined"
                className={classes.ms}
              >
                Connect
              </Button>
            </div>
            <div className={classes.ms}>
              {pinfo.Email && (
                <IconButton
                  href={`mailto:${pinfo.Email}`}
                  color="secondary"
                  size="medium"
                >
                  <Email />
                </IconButton>
              )}
              {pinfo.MobileNo && (
                <IconButton
                  href={`https://wa.me/${pinfo.MobileNo}`}
                  color="secondary"
                  size="medium"
                >
                  <WhatsApp />
                </IconButton>
              )}
              {pinfo.facebook && (
                <IconButton
                  href={pinfo.facebook.Link}
                  color="secondary"
                  size="medium"
                >
                  <Facebook />
                </IconButton>
              )}
              {pinfo.github && (
                <IconButton
                  href={pinfo.github.Link}
                  color="secondary"
                  size="medium"
                >
                  <GitHub />
                </IconButton>
              )}
              {pinfo.linkedin && (
                <IconButton
                  href={pinfo.linkedin.Link}
                  color="secondary"
                  size="medium"
                >
                  <LinkedIn />
                </IconButton>
              )}
              {pinfo.instagram && (
                <IconButton
                  href={pinfo.instagram.Link}
                  color="secondary"
                  size="medium"
                >
                  <Instagram />
                </IconButton>
              )}
              {pinfo.medium && (
                <IconButton
                  href={pinfo.medium.Link}
                  color="secondary"
                  size="medium"
                >
                  <Medium color="#f50057" />
                </IconButton>
              )}
              {pinfo.stackoverflow && (
                <IconButton
                  href={pinfo.stackoverflow.Link}
                  color="secondary"
                  size="medium"
                >
                  <StackOverflow color="#f50057" />
                </IconButton>
              )}
              {pinfo.tiktok && (
                <IconButton
                  href={pinfo.tiktok.Link}
                  color="secondary"
                  size="medium"
                >
                  <TikTok color="#f50057" />
                </IconButton>
              )}
              {pinfo.twitter && (
                <IconButton
                  href={pinfo.twitter.Link}
                  color="secondary"
                  size="medium"
                >
                  <Twitter />
                </IconButton>
              )}
              {pinfo.pinterest && (
                <IconButton
                  href={pinfo.pinterest.Link}
                  color="secondary"
                  size="medium"
                >
                  <Pinterest />
                </IconButton>
              )}
              {pinfo.reddit && (
                <IconButton
                  href={pinfo.reddit.Link}
                  color="secondary"
                  size="medium"
                >
                  <Reddit />
                </IconButton>
              )}
              {pinfo.youtube && (
                <IconButton
                  href={pinfo.youtube.Link}
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
                  setOpen(true);
                }}
                color="secondary"
              >
                Report
              </Button>
              <Button
                onClick={() => {
                  setView(true);
                }}
                color="primary"
                className={classes.bright}
              >
                View
              </Button>
            </div>
          </Box>
        )) || (
          <Box
            className={classes.plate}
            boxShadow={3}
            display="flex"
            justifyContent="center"
            borderRadius="borderRadius"
            margin="auto"
          >
            <Typography variant="h5" color="textSecondary">
              Card viewer
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}
