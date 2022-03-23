/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** import Custom Components */
import CustMobileMenu from "../Components/ui/CustMobileMenu";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      // width: "375px",
    },
  },
}));

export default function MobileMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const menuTitleArray = [props.menuProdTitle, props.menuCompTitle, props.menuConnTitle];

  return (
    <Grid item container xs={4}>
      <Grid item xs={12}>
        <CustMobileMenu
          color={"#fff"}
          menuTitleArray = {menuTitleArray}
          menuTitle1={props.menuProdTitle}
          menuTitle2={props.menuCompTitle}
          menuTitle3={props.menuConnTitle}
          menuMap1={props.prodMap}
          menuMap2={props.companyMap}
          menuMap3={props.connectMap}
          handleClick={props.handleClick}
          handleClose={props.handleClose}
          anchorEl1={props.anchorProdEl}
          anchorEl2={props.anchorCompEl}
          anchorEl3={props.anchorConnEl}
          open1={props.openProd}
          open2={props.openComp}
          open3={props.openConn}
          fontFamily={"Overpass"}
        />
      </Grid>
      {/* <Grid item xs={4}>
        <CustMenu
          color={"#fff"}
          menuTitle={props.menuCompTitle}
          menuMap={props.companyMap}
          handleClick={props.handleClick}
          handleClose={props.handleClose}
          anchorEl={props.anchorCompEl}
          open={props.openComp}
          fontFamily={"Overpass"}
        />
      </Grid> */}
      {/* <Grid item xs={4}>
        <CustMenu
          color={"#fff"}
          menuTitle={props.menuConnTitle}
          menuMap={props.connectMap}
          handleClick={props.handleClick}
          handleClose={props.handleClose}
          anchorEl={props.anchorConnEl}
          open={props.openConn}
          fontFamily={"Overpass"}
        />
      </Grid> */}
    </Grid>
  );
}
