import React, { useState } from "react";

/** import base pages */
import Header from "../Layout/Header/Header";
import Main from "../Layout/Main/Main";
import Footer from "../Layout/Footer/Footer";

/** Import MUI 5 Theme */
import { ThemeProvider } from "@mui/styles";
import theme from "../Assets/Theme/theme";

/** import material ui 5 components */
import { Grid } from "@mui/material";

/** custom data array */
const prodMap = [
  "Overview",
  "Pricing",
  "Marketplace",
  "Features",
  "Integration",
];
const companyMap = ["About", "Team", "Blog", "Careers"];
const connectMap = ["Contact", "Newsletter", "LinkedIn"];

function App() {
  const [anchorProdEl, setAnchorProdEl] = useState(null);
  const [anchorCompEl, setAnchorCompEl] = useState(null);
  const [anchorConnEl, setAnchorConnEl] = useState(null);
  const openProd = Boolean(anchorProdEl);
  const openComp = Boolean(anchorCompEl);
  const openConn = Boolean(anchorConnEl);
  const handleClick = (event) => {
    console.log(event.target.id);

    switch (event.target.id) {
      case "Connect":
        setAnchorConnEl(event.currentTarget);
        break;

      case "Company":
        setAnchorCompEl(event.currentTarget);
        break;

      case "Product":
        setAnchorProdEl(event.currentTarget);
        break;

      default:
        break;
    }
    // setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorProdEl(null);
    setAnchorCompEl(null);
    setAnchorConnEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item container justifyContent={"center"} width="1440px" style={{backgroundColor: "red"}}>
          <Header
            prodMap={prodMap}
            companyMap={companyMap}
            connectMap={connectMap}
            handleClick={handleClick}
            handleClose={handleClose}
            anchorProdEl={anchorProdEl}
            anchorCompEl={anchorCompEl}
            anchorConnEl={anchorConnEl}
            openProd={openProd}
            openComp={openComp}
            openConn={openConn}
          />
          <Main />
          <Footer
            prodMap={prodMap}
            companyMap={companyMap}
            connectMap={connectMap}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
