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
    marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      // width: "375px",
    },
  },
  gridMarg: {
    marginBottom: "2rem",
  },
}));

export default function HeadCallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item container xs={12} direction="row" className={classes.root}>
      <Grid item xs={matchesMD ? 1 : 3}></Grid>
      <Grid item container xs={matchesMD ? 10 : 6} direction={"column"}>
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems={"center"}
          className={classes.gridMarg}
        >
          <CustTypog
            text={"A modern publishing platform"}
            fonts={matchesMD ? "25px" : "45px"}
            colorFont={"#fff"}
            weight={"300"}
            fontFamily={"Overpass"}
            align={matchesMD ? "center" : null}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems={"center"}
          className={classes.gridMarg}
        >
          <CustTypog
            text={"Grow your audience and build your online brand"}
            fonts={"15px"}
            colorFont={"#fff"}
            weight={"300"}
            fontFamily={"Overpass"}
            letSpace={""}
            align={matchesMD ? "center" : null}
          />
        </Grid>
        <Grid item container direction={"row"} justifyContent={"center"}>
          <Grid item xs={matchesMD ? 6 : 3}>
            <CustButton
              butName={"Start for free"}
              // handleChange={handleChange}
              butValue={"Start"}
              variant={"contained"}
              color={theme.palette.primary.main}
              backgroundColor={theme.palette.White.main}
              fontWeight={"600"}
              fontSize={"12px"}
            />
          </Grid>
          <Grid item xs={matchesMD ? 6 : 3}>
            <CustButton
              butName={"Learn More"}
              // handleChange={handleChange}
              butValue={"Learn"}
              variant={"outlined"}
              color={theme.palette.White.main}
              backgroundColor={theme.palette.primary.main}
              fontWeight={"600"}
              fontSize={"12px"}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={matchesMD ? 1 : 3}></Grid>
    </Grid>
  );
}
