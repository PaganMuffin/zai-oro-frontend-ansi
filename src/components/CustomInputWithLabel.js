import { InputBase, Typography } from "@mui/material";

const CustomInputWithLabel = ({
	value = "",
	setFunction,
	label,
	type,
	multiline = false,
	width = "100%",
	accept = null,
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
			<InputBase
				multiline={multiline}
				style={{
					background: "white",
					paddingLeft: "0.5rem",
					paddingRight: "0.5rem",
					paddingTop: "0.25rem",
					paddingBottom: "0.25rem",
					borderRadius: "5px",
					filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
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
		</div>
	);
};

export default CustomInputWithLabel;
