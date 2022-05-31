import { InputBase, Typography } from "@mui/material";

const CustomInputWithLabel = ({ value, setFunction, label, type }) => {
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
				style={{
					background: "rgba(0, 0, 0, 0.07)",
					paddingLeft: "0.5rem",
					paddingRight: "0.5rem",
					paddingTop: "0.25rem",
					paddingBottom: "0.25rem",
					borderRadius: "5px",
					filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
				}}
				sx={{
					width: "350px",
				}}
				label={label}
				value={value}
				placeholder={label}
				type={type}
				onChange={(e) => {
					setFunction(e.target.value);
				}}
			/>
		</div>
	);
};

export default CustomInputWithLabel;
