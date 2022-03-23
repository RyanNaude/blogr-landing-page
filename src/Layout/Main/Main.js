/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** import custom SVG */
import CirclePic from "../../Assets/Images/bg-pattern-circles.svg";
import IntroDesktop from "../../Assets/Images/bg-pattern-intro-desktop.svg";
import IntroMobile from "../../Assets/Images/bg-pattern-intro-mobile.svg";
import ArrowDark from "../../Assets/Images/icon-arrow-dark.svg";
import ArrowLight from "../../Assets/Images/icon-arrow-light.svg";
import CloseIcon from "../../Assets/Images/icon-close.svg";
import Hamburger from "../../Assets/Images/icon-hamburger.svg";
import EditorDesktop from "../../Assets/Images/illustration-editor-desktop.svg";
import EditorMobile from "../../Assets/Images/illustration-editor-mobile.svg";
import LaptopDesktop from "../../Assets/Images/illustration-laptop-desktop.svg";
import LaptopMobile from "../../Assets/Images/illustration-laptop-mobile.svg";
import Phones from "../../Assets/Images/illustration-phones.svg";

/** import custom components */
import MainBodTop from "../../Components/MainBodTop";
import MainBodMid from "../../Components/MainBodMid";
import MainBodBottom from "../../Components/mainBodBottom";
import { ArrowCircleRight } from "@mui/icons-material";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.backGround.main,

    backgroundColor: "#F3F3F3",
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
      <Grid item container direction={"column"} justifyContent={"center"}>
        <Grid item>
          <MainBodTop
            EditorDesktop={EditorDesktop}
            EditorMobile={EditorMobile}
            CirclePic={CirclePic}
          />
        </Grid>
        <Grid item>
          <MainBodMid Phones={Phones} />
        </Grid>
        <Grid item>
          <MainBodBottom
            LaptopDesktop={LaptopDesktop}
            LaptopMobile={LaptopMobile}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
