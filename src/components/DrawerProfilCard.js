import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DrawerProfilCard = () => {
	return (
		<Paper
			style={{ display: "flex", padding: 10, gap: 10, alignItems: "center" }}>
			<Link
				to={"/user/1/PaganMuffin"}
				style={{
					textDecoration: "none",
					color: "black",
				}}>
				<Avatar sx={{ width: 56, height: 56 }} />
			</Link>
			<Box>
				<Link
					to={"/user/1/PaganMuffin"}
					style={{
						textDecoration: "none",
						color: "black",
					}}>
					<Typography variant="h6">PaganMuffin</Typography>
				</Link>

				<Box>
					<Link
						to={"/user/settings"}
						style={{
							textDecoration: "none",
							color: "black",
						}}>
						<Typography variant="subtitle2">Ustawienia</Typography>
					</Link>
					<Link
						to={"/user/messeges"}
						style={{
							textDecoration: "none",
							color: "black",
						}}>
						<Typography variant="subtitle2">Wiadomosci</Typography>
					</Link>
				</Box>
			</Box>
		</Paper>
	);
};

export default DrawerProfilCard;
