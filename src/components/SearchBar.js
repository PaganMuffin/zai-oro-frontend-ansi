import { Search } from "@mui/icons-material";
import { InputBase, Paper } from "@mui/material";
import React from "react";

const SearchBar = ({
	value,
	setFunction,
	width = "100%",
	color = "black",
	background = "white",
}) => {
	return (
		<Paper
			style={{
				display: "flex",
				width: width,
				background: background,
				color: color,
				borderRadius: "10px",
				alignItems: "center",
				height: "50px",
			}}>
			<Search
				fontSize="large"
				sx={{
					width: "50px",
					color: color,
				}}
			/>
			<InputBase
				placeholder="Szukaj..."
				value={value}
				onChange={(e) => {
					setFunction(e.target.value);
				}}
				style={{
					paddingLeft: "0.5rem",
					paddingRight: "0.5rem",
					paddingTop: "0.25rem",
					paddingBottom: "0.25rem",
					borderTopRightRadius: "inherit",
					borderBottomRightRadius: "inherit",
					color: color,
				}}
				sx={{
					width: "100%",
				}}
			/>
		</Paper>
	);
};

export default SearchBar;
