import {
	AppBar,
	Typography,
	Toolbar,
	Drawer,
	CssBaseline,
	IconButton,
	useScrollTrigger,
} from "@mui/material";
import Box from "@mui/material/Box";

import MenuIcon from "@mui/icons-material/Menu";
import { cloneElement, useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import SubEntry from "../../components/SubEntry";
import DrawerProfilCard from "../../components/DrawerProfilCard";
import { Route, Routes } from "react-router-dom";
import SubView from "../sub-view";
import AddSub from "../add-page";
import User from "../user";
import SeriesView from "../series-view";

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
			<Toolbar />
			<SearchBar
				background={`rgb(${process.env.REACT_APP_FOREGROUND})`}
				color={`rgb(${process.env.REACT_APP_TEXT})`}
				value={search}
				setFunction={setSearch}
				width={"50%"}
			/>
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

const MainPage = (props) => {
	const [drawerWidth, setDrawerWidth] = useState(240);
	const [open, setOpen] = useState(false);
	const [appBarTransparent, setAppBarTransparent] = useState(0.2);

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY;

			setAppBarTransparent(show / 150 > 1 ? 1 : Math.max(0.2, show / 150));
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Box style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
			<CssBaseline />
			<AppBar
				style={{
					background: `rgba(${process.env.REACT_APP_FOREGROUND},${appBarTransparent})`,
					WebkitBoxShadow: `0px 16px 25px -15px rgba(${process.env.REACT_APP_FOREGROUND}, ${appBarTransparent})`,
					MozBoxShadow: `0px 16px 25px -15px rgba(${process.env.REACT_APP_FOREGROUND}, ${appBarTransparent})`,
					boxShadow: `0px 16px 25px -15px rgba(${process.env.REACT_APP_FOREGROUND}, ${appBarTransparent})`,
				}}
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<IconButton
						edge="start"
						style={{ color: `rgb(${process.env.REACT_APP_TEXT_LIGHTER})` }}
						onClick={() => {
							setOpen(!open);
						}}>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						style={{ color: `rgb(${process.env.REACT_APP_TEXT_LIGHTER})` }}>
						ANSI
					</Typography>
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
						background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
						color: `rgb(${process.env.REACT_APP_TEXT})`,
						boxSizing: "border-box",
					},
				}}>
				<Toolbar />
				<Box
					sx={{
						overflow: "auto",
					}}>
					<DrawerProfilCard />
					<div>ADD</div>
				</Box>
			</Drawer>
			<Box component="main" style={{ flexGrow: 1 }}>
				<Routes>
					<Route path="/view/:id" element={<SubView />} />
					<Route path="/user/:id/*" element={<User />} />
					<Route path="/series/:id/*" element={<SeriesView />} />
					<Route path="/add" element={<AddSub />} />
					<Route path="*" element={<SearchView />} />
				</Routes>
			</Box>
			<Box
				style={{
					height: "100px",
					marginTop: "5rem",
					padding: "2rem",
					textAlign: "center",
					background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
				}}>
				<Typography variant="h6">Made with {"<3"}</Typography>
			</Box>
		</Box>
	);
};

export default MainPage;
