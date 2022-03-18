/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** import custom SVG */

/** import Pages */
import SiteNav from "../../Components/SiteNav";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.tertiary.main,
    borderTopRightRadius: "60px",
    paddingBottom: "3rem",
    width: "1440px",
    [theme.breakpoints.down("md")]: {
      // width: "375px",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={classes.root}>
      <Grid item container>
        <SiteNav
          prodMap={props.prodMap}
          companyMap={props.companyMap}
          connectMap={props.connectMap}
        />
      </Grid>
    </Grid>
  );
}
