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
	color = "black",
	background = "white",
}) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 10,
				width: width,
			}}>
			<Typography style={{ color: color }} variant="h6">
				{label}
			</Typography>
			<Paper
				style={{
					background: background,
				}}>
				<InputBase
					readOnly={readOnly}
					multiline={multiline}
					style={{
						paddingLeft: "0.5rem",
						paddingRight: "0.5rem",
						paddingTop: "0.25rem",
						paddingBottom: "0.25rem",
						borderRadius: "5px",
						color: color,
					}}
					sx={{
						width: "100%",
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
