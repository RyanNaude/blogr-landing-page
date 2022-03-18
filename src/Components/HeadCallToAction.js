/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** import Custom Components */
import CustButton from "./ui/CustButton";
import CustTypog from "./ui/CustTypog";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "1rem",
    [theme.breakpoints.down("md")]: {
      // width: "375px",
    },
  },
}));

export default function HeadCallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item container xs={12} direction="row" className={classes.root}>
      <Grid item xs={3}></Grid>
      <Grid item container xs={6}>
        <Grid item container justifyContent={"center"} alignItems={"center"}>
          <CustTypog
            text={"A modern publishing platform"}
            fonts={"45px"}
            colorFont={"#fff"}
            weight={"300"}
            fontFamily={"Overpass"}
          />
        </Grid>
        <Grid item container justifyContent={"center"} alignItems={"center"}>
          <CustTypog
            text={"Grow your audience and build your online brand"}
            fonts={"18px"}
            colorFont={"#fff"}
            weight={"300"}
            fontFamily={"Overpass"}
            letSpace={"2px"}
          />
        </Grid>
        <Grid item xs={6}>
          <CustButton
            butName={"Login"}
            // handleChange={handleChange}
            butValue={"Login"}
            variant={"text"}
            color={theme.palette.White.main}
            backgroundColor={theme.palette.primary.main}
          />
        </Grid>
        <Grid item xs={6}>
          <CustButton
            butName={"Signup"}
            // handleChange={handleChange}
            butValue={"Signup"}
            variant={"contained"}
            color={theme.palette.primary.main}
            backgroundColor={theme.palette.White.main}
            fontWeight={"600"}
          />
        </Grid>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
}
