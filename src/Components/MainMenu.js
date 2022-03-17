/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** import Custom Components */
import CustMenu from "../Components/ui/CustMenu";

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

export default function MainMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item container xs={4} direction="row">
      <Grid item xs={4}>
        <CustMenu
          color={"#fff"}
          menuTitle={props.menuProdTitle}
          menuMap={props.prodMap}
          handleClick={props.handleClick}
          handleClose={props.handleClose}
          anchorEl={props.anchorProdEl}
          open={props.openProd}
          fontFamily={"Overpass"}
        />
      </Grid>
      <Grid item xs={4}>
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
      </Grid>
    </Grid>
  );
}
