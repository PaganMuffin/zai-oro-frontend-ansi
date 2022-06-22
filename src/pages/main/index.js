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
import SearchBar from "../../components/SearchBar";
import SubEntry from "../../components/SubEntry";
import DrawerProfilCard from "../../components/DrawerProfilCard";
import { Route, Routes } from "react-router-dom";
import SubView from "../sub-view";
import AddSub from "../add-page";
import User from "../user";

const demoSub = {
	title: "SPY×FAMILY",
	ep: 1,
	size: 213,
	downloads: 30,
	file: "https://speed.hetzner.de/100MB.bin",
	cover:
		"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Yl5M3AiLZAMq.png",
	author: "PaganMuffin",
};

const SearchView = () => {
	const [search, setSearch] = useState("");
	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 25,
			}}>
			<SearchBar value={search} setFunction={setSearch} width={"50%"} />
			<SubEntry width="50%" data={demoSub} />
			<SubEntry width="50%" data={demoSub} />
			<SubEntry width="50%" data={demoSub} />
			<SubEntry width="50%" data={demoSub} />
			<SubEntry width="50%" data={demoSub} />
			<SubEntry width="50%" data={demoSub} />
			<SubEntry width="50%" data={demoSub} />
			<SubEntry width="50%" data={demoSub} />
		</Box>
	);
};

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
					<DrawerProfilCard />
					<div>ADD</div>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				<Routes>
					<Route path="/view/:id" element={<SubView />} />
					<Route path="/add" element={<AddSub />} />
					<Route path="/user/:id/*" element={<User />} />
					<Route path="*" element={<SearchView />} />
				</Routes>
			</Box>
		</Box>
	);
};

export default MainPage;
