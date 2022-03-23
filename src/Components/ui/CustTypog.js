import React from "react";

/** Import MUI components */
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({}));

export default function CustTypog(props) {
  const classes = useStyles();
  return (
    <Typography
      variant={props.variant}
      style={{
        fontSize: props.fonts,
        fontWeight: props.weight,
        letterSpacing: props.letSpace,
        fontFamily: props.fontFamily,
        color: props.colorFont,
        textAlign: props.align,
      }}
    >
      {props.text}
    </Typography>
  );
}
