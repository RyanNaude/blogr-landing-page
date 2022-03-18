import React from "react";

/** Import MUI components */
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.buttonBackground.main,
    fontFamily: "Space Mono",
    height: "2rem",
    borderRadius: "50px",
    width: "90%",
    "&:hover": {
      // backgroundColor: theme.palette.buttonHoverBackground.main,
      // color: theme.palette.buttonBackground.main,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
  },
  submitRoot: {
    "&:hover": {
      // backgroundColor: theme.palette.buttonBackground.main,
      // color: theme.palette.buttonHoverBackground.main,
    },
    [theme.breakpoints.down("md")]: {},
  },
}));

export default function CustButton(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item container xs={12} justifyContent="center">
      <Button
        variant={props.variant}
        className={classes.root}
        style={{
          width: props.butWidth,
          color: props.color,
          fontFamily: "Overpass",
          backgroundColor: props.backgroundColor,
          fontWeight: props.fontWeight,
        }}
        disableElevation
        name={props.butName}
        onClick={props.handleChange}
        value={props.butValue}
      >
        {props.butName}
      </Button>
    </Grid>
  );
}
