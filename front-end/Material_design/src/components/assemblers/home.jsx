import {
  Box,
  Typography,
  CircularProgress,
  colors,
  Grid,
  IconButton,
} from "@material-ui/core";
import useStyles from "../style";
import Dashboard from "../../fucntions/apiAccess/dashboard/dashboard";
import { useEffect, useState } from "react";
import {
  Facebook,
  GitHub,
  Group,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
  Reddit,
  Pinterest,
} from "@material-ui/icons";
import Medium from "../icons/medium";
import TikTok from "../icons/tiktok";
import StackOverflow from "../icons/stackoverflow";

export default function Home() {
  const classes = useStyles(),
    [info, setInfo] = useState([]),
    icons = {
      users: <Group color="primary" />,
      facebook: <Facebook color="primary" />,
      github: <GitHub color="primary" />,
      twitter: <Twitter color="primary" />,
      linkedin: <LinkedIn color="primary" />,
      youtube: <YouTube color="primary" />,
      instagram: <Instagram color="primary" />,
      reddit: <Reddit color="primary" />,
      pinterest: <Pinterest color="primary" />,
      medium: <Medium color="#3f51b5" />,
      tiktok: <TikTok color="#3f51b5" />,
      stackoverflow: <StackOverflow color="#3f51b5" />,
    };
  let [change, setChange] = useState(0);
  useEffect(() => {
    Dashboard().then((obj) => setInfo(obj));
  }, [change]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">SociaLod</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          paragraph
          variant="body1"
          style={{
            textAlign: "justify",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          It's based on human information from diffrent social medias. Search by
          user name with different social media publicly available information.
          That make a Human information resources with recursive search.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Data Availability</Typography>
      </Grid>
      {info &&
        Object.entries(info).map(([k, v], i) => (
          <Grid key={i} item xs={3}>
            <Box
              position="relative"
              display="inline-flex"
              className={classes.ms}
            >
              <CircularProgress
                style={{
                  backgroundColor: colors.blueGrey[50],
                  borderRadius: 100,
                  strokeLinecap: "round",
                }}
                size={50}
                variant="determinate"
                value={v}
              />
              <Box
                padding="1rem"
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconButton
                  onClick={() => {
                    setChange((change += 1));
                  }}
                >
                  {icons[k]}
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
}
