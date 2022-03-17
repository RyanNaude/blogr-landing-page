/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** import custom SVG */

/** import custom components */

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.backGround.main,
    [theme.breakpoints.down("md")]: {
      // width: "375px",
    },
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={classes.root}>
      <Grid item container>
        <h1>Main</h1>
      </Grid>
    </Grid>
  );
}
