import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DrawerProfilCard = () => {
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
				to={"/user/1/PaganMuffin"}
				style={{
					textDecoration: "none",
				}}>
				<Avatar sx={{ width: 56, height: 56 }} />
			</Link>
			<Box>
				<Link
					to={"/user/1/PaganMuffin"}
					style={{
						textDecoration: "none",
						color: `rgb(${process.env.REACT_APP_TEXT})`,
					}}>
					<Typography variant="h6">PaganMuffin</Typography>
				</Link>

				<Box>
					<Link
						to={"/user/settings"}
						style={{
							textDecoration: "none",
							color: `rgb(${process.env.REACT_APP_TEXT})`,
						}}>
						<Typography variant="subtitle2">Ustawienia</Typography>
					</Link>
					<Link
						to={"/user/messeges"}
						style={{
							textDecoration: "none",
							color: `rgb(${process.env.REACT_APP_TEXT})`,
						}}>
						<Typography variant="subtitle2">Wiadomosci</Typography>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default DrawerProfilCard;
