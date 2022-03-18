/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** import Custom Components */
import CustTypog from "./ui/CustTypog";

/** import custom components */
import EditorDesktop from "../Assets/Images/illustration-editor-desktop.svg";
import EditorMobile from "../Assets/Images/illustration-editor-mobile.svg";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${EditorDesktop})`,
    backgroundSize: "60%",
    background: "#f3f3f3  no-repeat",
    backgroundPosition: "143% 20%",
    paddingTop: "5rem",
    paddingBottom: "10rem",
  },
}));

export default function MainBodTop(props) {
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
      <Grid item container xs={12} justifyContent={"center"}>
        <CustTypog
          text={"Designed for the future"}
          fonts={"32px"}
          colorFont={"#1f3f5b"}
          weight={"600"}
          fontFamily={"Overpass"}
        />
      </Grid>
      <Grid item container direction={"row"}>
        <Grid item container direction={"column"} xs={6}>
          <Grid item container>
            <Grid
              item
              container
              style={{ marginBottom: "2rem", paddingLeft: "5rem" }}
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
              style={{ marginBottom: "4rem", paddingLeft: "5rem" }}
            >
              <CustTypog
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus. Eu non diam phasellus vestibulum lorem sed. Fames ac turpis egestas sed. Nullam eget felis eget nunc lobortis mattis. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Fusce id velit ut tortor pretium viverra suspendisse. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Eget velit aliquet sagittis id consectetur purus."
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
              style={{ marginBottom: "2rem", paddingLeft: "5rem" }}
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
              style={{ marginBottom: "4rem", paddingLeft: "5rem" }}
            >
              <CustTypog
                text={
                  "Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Gravida quis blandit turpis cursus in hac habitasse platea. Velit laoreet id donec ultrices tincidunt. Eget duis at tellus at urna condimentum mattis pellentesque. Quis risus sed vulputate odio ut. Netus et malesuada fames ac turpis egestas. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. "
                }
                colorFont={"#1f3f5b"}
                weight={"600"}
                fontFamily={"Overpass"}
                variant={"body1"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={6}
          justifyContent={"center"}
          alignItems={"center"}
          style={{ paddingLeft: "17rem" }}
        >
        </Grid>
      </Grid>
    </Grid>
  );
}
