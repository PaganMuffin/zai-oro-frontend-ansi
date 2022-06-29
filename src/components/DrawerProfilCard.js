import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DrawerProfilCard = () => {
	const id = localStorage.getItem("id");
	const username = localStorage.getItem("username");

	return (
		<Box
			style={{
				display: "flex",
				padding: 10,
				gap: 10,
				alignItems: "center",
				color: `rgb(${process.env.REACT_APP_TEXT})`,
			}}>
			<Link
				to={`/user/${id}`}
				style={{
					textDecoration: "none",
				}}>
				<Avatar sx={{ width: 56, height: 56 }} />
			</Link>
			<Box
				style={{
					//overflow
					whiteSpace: "nowrap",
					textOverflow: "ellipsis",
					overflow: "hidden",
				}}>
				<Link
					to={`/user/${id}`}
					style={{
						textDecoration: "none",
						color: `rgb(${process.env.REACT_APP_TEXT})`,
					}}>
					<Typography
						style={{
							whiteSpace: "nowrap",
							textOverflow: "ellipsis",
							overflow: "hidden",
						}}
						variant="h6">
						{username}
					</Typography>
				</Link>
			</Box>
		</Box>
	);
};

export default DrawerProfilCard;
