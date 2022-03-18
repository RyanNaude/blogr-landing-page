/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** import Custom Components */
import CustTypog from "../../Components/ui/CustTypog";
import CustMenu from "../../Components/ui/CustMenu";
import MainLogo from "../../Components/MainLogo";
import MainMenu from "../../Components/MainMenu";
import LoginModule from "../../Components/LoginModule";
import HeadCallToAction from "../../Components/HeadCallToAction";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    borderBottomLeftRadius: "60px",
    paddingTop: "1rem",
    paddingLeft: "5rem",
    width: "1440px",
    height: "15rem",
    [theme.breakpoints.down("md")]: {
      // width: "375px",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={classes.root}>
      <Grid item container  direction="row">
        <Grid item container direction="row" xs={2}>
          <MainLogo />
        </Grid>
        <Grid item container xs={4}>
          <MainMenu
            handleClick={props.handleClick}
            handleClose={props.handleClose}
            anchorProdEl={props.anchorProdEl}
            openProd={props.openProd}
            anchorCompEl={props.anchorCompEl}
            openComp={props.openComp}
            anchorConnEl={props.anchorConnEl}
            openConn={props.openConn}
            prodMap={props.prodMap}
            companyMap={props.companyMap}
            connectMap={props.connectMap}
            menuProdTitle={"Product"}
            menuCompTitle={"Company"}
            menuConnTitle={"Connect"}
          />
        </Grid>
        <Grid item container xs={3}></Grid>
        <Grid item containe xs={3}>
          <LoginModule />
        </Grid>
      </Grid>

      <Grid item container direction="row">
        <HeadCallToAction />
      </Grid>
    </Grid>
  );
}
