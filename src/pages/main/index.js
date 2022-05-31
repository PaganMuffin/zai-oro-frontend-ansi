import {
	AppBar,
	Typography,
	Toolbar,
	Drawer,
	CssBaseline,
	IconButton,
} from "@mui/material";
import Box from "@mui/material/Box";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MainPage = () => {
	const [drawerWidth, setDrawerWidth] = useState(240);
	const [open, setOpen] = useState(false);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<IconButton
						edge="start"
						style={{ color: "white" }}
						onClick={() => {
							setOpen(!open);
						}}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6">ANSI</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="temporary"
				anchor="left"
				onClose={() => {
					setOpen(false);
				}}
				open={open}
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<div>PROFIL</div>
					<div>ADD</div>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
			</Box>
		</Box>
	);
};

export default MainPage;
