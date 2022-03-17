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

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "60px",
    marginRight: "-4rem",
    marginLeft: "-0.5rem",
    marginTop: "-4rem",
    paddingTop: "4rem",
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
    <Grid container className={classes.root} direction="row">
      <Grid container direction="row" className={classes.root} xs={2}>
        <MainLogo />
      </Grid>
      <Grid item container className={classes.root} xs={4}>
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
      <Grid item container xs={3}>
        <CustTypog
          text={"Login Details"}
          fonts={"18px"}
          colorFont={"#fff"}
          weight={"300"}
          fontFamily={"Overpass"}
        />
      </Grid>
    </Grid>
  );
}
