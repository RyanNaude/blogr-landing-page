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
import MobileMenu from "../../Components/MobileMenu";

/** import custom svg */
import IntroDesktop from "../../Assets/Images/bg-pattern-intro-desktop.svg";
import IntroMobile from "../../Assets/Images/bg-pattern-intro-mobile.svg";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    borderBottomLeftRadius: "60px",
    paddingTop: "1rem",
    paddingLeft: "5rem",
    width: "100%",
    height: "25rem",
    backgroundImage: `url(${IntroDesktop})`,
    backgroundSize: "170%",
    background: "#f3f3f3  no-repeat",
    backgroundPosition: "15% 53%",

    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${IntroMobile})`,
      // width: "375px",
      paddingLeft: "1rem",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={classes.root}>
      <Grid item container direction="row">
        <Grid item container direction="row" xs={2}>
          <MainLogo />
        </Grid>
        <Grid item container xs={matchesMD ? 1 : 4}>
          {matchesMD ? null : (
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
          )}
        </Grid>
        <Grid item container xs={3}></Grid>
        <Grid
          item
          container
          xs={matchesMD ? 6 : 3}
          style={{ paddingRight: matchesMD ? null : "2rem" }}
          justifyContent={matchesMD ? "flex-end" : null}
        >
          {matchesMD ? (
            <MobileMenu
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
          ) : (
            <LoginModule />
          )}
        </Grid>
      </Grid>

      <Grid item container direction="row">
        <HeadCallToAction />
      </Grid>
    </Grid>
  );
}
