import * as React from "react";

/** import material ui components */
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustMenu(props) {
  console.log(props);
  return (
    <div>
      <Button
        id={props.menuTitle}
        aria-controls={props.open ? props.menuTitle : undefined}
        aria-haspopup="true"
        aria-expanded={props.open ? "true" : undefined}
        disableElevation
        onClick={props.handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={{
          //   width: props.butWidth,
          color: props.color,
          fontFamily: props.fontFamily,
        }}
      >
        {props.menuTitle}
      </Button>
      <StyledMenu
        id={props.menuTitle}
        MenuListProps={{
          "aria-labelledby": props.menuTitle,
        }}
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.handleClose}
      >
        {props.menuMap.map((data) => {
          return (
            <MenuItem onClick={props.handleClose} disableRipple key={data}>
              {data}
            </MenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
}
