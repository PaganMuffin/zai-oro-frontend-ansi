import { InputBase, Paper, Typography } from "@mui/material";

const CustomInputWithLabel = ({
	value = "",
	setFunction,
	label,
	type,
	multiline = false,
	width = "100%",
	accept = null,
	readOnly = false,
}) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 10,
			}}>
			<Typography style={{ color: "#4A5EA4" }} variant="h6">
				{label}
			</Typography>
			<Paper>
				<InputBase
					readOnly={readOnly}
					multiline={multiline}
					style={{
						background: "white",
						paddingLeft: "0.5rem",
						paddingRight: "0.5rem",
						paddingTop: "0.25rem",
						paddingBottom: "0.25rem",
						borderRadius: "5px",
					}}
					sx={{
						width: width,
					}}
					label={label}
					value={type == "file" ? value.name : value}
					type={type}
					inputProps={{ accept: accept }}
					onChange={(e) => {
						if (type == "file") {
							setFunction(e.target.files[0]);
						} else {
							setFunction(e.target.value);
						}
					}}
				/>
			</Paper>
		</div>
	);
};

export default CustomInputWithLabel;
