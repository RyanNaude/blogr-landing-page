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
import Phones from "../Assets/Images/illustration-phones.svg";
import CirclePic from "../Assets/Images/bg-pattern-circles.svg";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    height: "25rem",
    backgroundColor: "#3f4164",
    borderTopRightRadius: "60px",
    borderBottomLeftRadius: "60px",

    backgroundImage: `url(${CirclePic})`,
    backgroundSize: "60%",
    background: "#f3f3f3  no-repeat",
    backgroundPosition: "-15% 90%",
  },
}));

export default function MainBodMid(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      item
      container
      direction="row"
      xs={12}
      justifyContent={"center"}
      className={classes.root}
    >
      <Grid item xs={6} style={{ marginTop: "-4.5rem", paddingLeft: "4rem" }}>
        <img
          src={Phones}
          alt=""
          className={classes.icon}
          style={{ position: "absolute" }}
        />
      </Grid>
      <Grid
        item
        container
        xs={6}
        direction={"column"}
        style={{ marginTop: "8rem", paddingRight: "5rem" }}
      >
        <Grid item container style={{ marginBottom: "2rem" }}>
          <CustTypog
            text={"Robust content management"}
            colorFont={"#fff"}
            weight={"600"}
            fontFamily={"Overpass"}
            variant={"h5"}
          />
        </Grid>
        <Grid item container>
          <CustTypog
            text={
              "Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Gravida quis blandit turpis cursus in hac habitasse platea. Velit laoreet id donec ultrices tincidunt. Eget duis at tellus at urna condimentum mattis pellentesque. Quis risus sed vulputate odio ut. Netus et malesuada fames ac turpis egestas. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. "
            }
            colorFont={"#fff"}
            weight={"300"}
            fontFamily={"Overpass"}
            variant={"body1"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
