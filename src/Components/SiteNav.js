/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** Import Custom Components */
import CustTypog from "./ui/CustTypog";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "4rem",
    [theme.breakpoints.down("md")]: {
      // width: "375px",
    },
  },
  navHeading: {
    marginBottom: "1rem",
  },
}));

export default function SiteNav(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      className={classes.root}
      direction={"row"}
      justifyContent={"center"}
    >
      <Grid
        item
        container
        xs={matchesMD ? 12 : 3}
        paddingLeft={matchesMD ? "9rem" : null}
      >
        <CustTypog
          text={"Blogr"}
          fonts={"32px"}
          colorFont={"#fff"}
          weight={"600"}
          fontFamily={"Overpass"}
          // align={matchesMD ? "center" : null}
        />
      </Grid>
      <Grid item container xs={9} direction={"row"}>
        <Grid item container direction="column" xs={matchesMD ? 12 : 4}>
          <Grid
            item
            container
            className={classes.navHeading}
            justifyContent={"space-around"}
            direction="column"
          >
            <CustTypog
              text={"Product"}
              fonts={"16px"}
              colorFont={"#fff"}
              weight={"600"}
              fontFamily={"Overpass"}
              align={matchesMD ? "center" : null}
            />
          </Grid>
          {props.prodMap.map((data) => {
            return (
              <Grid item key={data}>
                <CustTypog
                  text={data}
                  fonts={"16px"}
                  colorFont={"#fff"}
                  weight={"300"}
                  fontFamily={"Overpass"}
                  align={matchesMD ? "center" : null}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid item container direction="column" xs={matchesMD ? 12 : 4}>
          <Grid item className={classes.navHeading}>
            <CustTypog
              text={"Company"}
              fonts={"16px"}
              colorFont={"#fff"}
              weight={"600"}
              fontFamily={"Overpass"}
              align={matchesMD ? "center" : null}
            />
          </Grid>
          {props.companyMap.map((data) => {
            return (
              <Grid item key={data}>
                <CustTypog
                  text={data}
                  fonts={"16px"}
                  colorFont={"#fff"}
                  weight={"300"}
                  fontFamily={"Overpass"}
                  align={matchesMD ? "center" : null}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid item container direction="column" xs={matchesMD ? 12 : 4}>
          <Grid item className={classes.navHeading}>
            <CustTypog
              text={"Connect"}
              fonts={"16px"}
              colorFont={"#fff"}
              weight={"800"}
              fontFamily={"Overpass"}
              align={matchesMD ? "center" : null}
            />
          </Grid>
          {props.connectMap.map((data) => {
            return (
              <Grid item key={data}>
                <CustTypog
                  text={data}
                  fonts={"16px"}
                  colorFont={"#fff"}
                  weight={"400"}
                  fontFamily={"Overpass"}
                  align={matchesMD ? "center" : null}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
