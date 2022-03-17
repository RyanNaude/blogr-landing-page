/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** import Custom Components */
import CustTypog from "../Components/ui/CustTypog";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function MainLogo(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item container direction="row" xs={2}>
      <CustTypog
        text={"Blogr"}
        fonts={"32px"}
        colorFont={"#fff"}
        weight={"600"}
        fontFamily={"Overpass"}
      />
    </Grid>
  );
}
