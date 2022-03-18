/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** import Custom Components */
import CustTypog from "./ui/CustTypog";

/** import custom svg */
import LaptopDesktop from "../Assets/Images/illustration-laptop-desktop.svg";
import LaptopMobile from "../Assets/Images/illustration-laptop-mobile.svg";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${LaptopDesktop})`,
    // backgroundSize: "60%",
    background: "#f3f3f3  no-repeat",
    backgroundPosition: "-58% 150%",
    paddingTop: "3rem",
    paddingBottom: "10rem",
    paddingTop: "13rem",
  },
}));

export default function MainBodBottom(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      item
      container
      direction="row"
      justifyContent={"center"}
      xs={12}
      className={classes.root}
    >
      <Grid item container direction={"row"}>
        <Grid
          item
          container
          xs={6}
          justifyContent={"center"}
          alignItems={"center"}
          style={{ paddingLeft: "17rem" }}
        ></Grid>
        <Grid item container direction={"column"} xs={6}>
          <Grid item container>
            <Grid
              item
              container
              style={{ marginBottom: "2rem", paddingRight: "5rem" }}
            >
              <CustTypog
                text={"Introducing an extensable editor"}
                colorFont={"#1f3f5b"}
                weight={"600"}
                fontFamily={"Overpass"}
                variant={"h5"}
              />
            </Grid>
            <Grid
              item
              container
              style={{ marginBottom: "4rem", paddingRight: "5rem" }}
            >
              <CustTypog
                text={
                  "Praesent tristique magna sit amet purus. Eu non diam phasellus vestibulum lorem sed. Fames ac turpis egestas sed. Nullam eget felis eget nunc lobortis mattis. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Fusce id velit ut tortor pretium viverra suspendisse. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Eget velit aliquet sagittis id consectetur purus."
                }
                colorFont={"#1f3f5b"}
                weight={"600"}
                fontFamily={"Overpass"}
                variant={"body1"}
              />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid
              item
              container
              style={{ marginBottom: "2rem", paddingRight: "5rem" }}
            >
              <CustTypog
                text={"Robust content management"}
                colorFont={"#1f3f5b"}
                weight={"600"}
                fontFamily={"Overpass"}
                variant={"h5"}
              />
            </Grid>
            <Grid
              item
              container
              style={{ marginBottom: "4rem", paddingRight: "5rem" }}
            >
              <CustTypog
                text={
                  "Velit laoreet id donec ultrices tincidunt. Eget duis at tellus at urna condimentum mattis pellentesque. Quis risus sed vulputate odio ut. Netus et malesuada fames ac turpis egestas. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. "
                }
                colorFont={"#1f3f5b"}
                weight={"600"}
                fontFamily={"Overpass"}
                variant={"body1"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
