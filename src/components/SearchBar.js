import { Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import React from "react";

const SearchBar = ({ value, setFunction, width = "100%" }) => {
	return (
		<div
			style={{
				display: "flex",
				width: width,
				background: "white",
				borderRadius: "10px",
				alignItems: "center",
				height: "50px",
				filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
			}}>
			<Search
				fontSize="large"
				sx={{
					width: "50px",
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
				}}
				sx={{
					width: "100%",
				}}
			/>
		</div>
	);
};

export default SearchBar;
