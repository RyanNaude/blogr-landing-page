import { createTheme } from "@mui/material/styles";

//  Colors
//  Primary
const Lightred = "#ff525d"; // (CTA text)
const Verylightred = "#ff7a85"; // (CTA hover background)
const Verydarkblue = "#1f3f5b"; //(headings)

//  Neutral
const White = "#fff"; //(text)
const Grayishblue = "#c8c8cb"; //(footer text)
const Verydarkgrayishblue = "#4b5862"; //(body copy)
const Verydarkblackblue = "#25252d"; //(footer background)

// Gradient
// Background gradient - Intro/CTA mobile nav:
const LightredGrad = "#ff3d54";
const VerylightredGrad = "#ff8f70";

// Background gradient - body:
const Verydarkgrayblue = "#2c2d3f";
const Verydarkdesaturatedblue = "#3f4164";

export default createTheme({
  palette: {
    primary: {
      main: Lightred,
    },
    secondary: {
      main: Verylightred,
    },
    tertiary: {
      main: Verydarkblue,
    },
    backGround: {
      main: White,
    },
    Lightred: { main: Lightred },
    Verylightred: { main: Verylightred },
    Verydarkblue: { main: Verydarkblue },
    White: { main: White },
    Grayishblue: { main: Grayishblue },
    Verydarkgrayishblue: { main: Verydarkgrayishblue },
    Verydarkblackblue: { main: Verydarkblackblue },
    LightredGrad: { main: LightredGrad },
    VerylightredGrad: { main: VerylightredGrad },
    Verydarkgrayblue: { main: Verydarkgrayblue },
    Verydarkdesaturatedblue: { main: Verydarkdesaturatedblue },
  },
  typography: {
    adviceHeader: {
      fontFamily: "Space Mono",
    },
    tipBody: {
      fontFamily: "Space Mono",
    },
  },
  body: {
    margin: 0,
  },
});
