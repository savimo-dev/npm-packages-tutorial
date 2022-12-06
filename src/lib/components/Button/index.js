import React from "react";
import { Button as MuiButton } from "@mui/material";
const Button = ({ ...props }) => {
	return <MuiButton {...props}>{props.children}</MuiButton>;
};

export default Button;
