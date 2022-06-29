import {
	AppBar,
	Typography,
	Toolbar,
	Drawer,
	CssBaseline,
	IconButton,
	useScrollTrigger,
	Button,
} from "@mui/material";
import Box from "@mui/material/Box";

import MenuIcon from "@mui/icons-material/Menu";
import { cloneElement, useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import SubEntry from "../../components/SubEntry";
import DrawerProfilCard from "../../components/DrawerProfilCard";
import { Link, Route, Routes } from "react-router-dom";
import SubView from "../sub-view";
import AddSub from "../add-page";
import User from "../user";
import SeriesView from "../series-view";
import SearchView from "../search-page";
import AdminPanel from "../admin";
import { LogOut } from "../../utills";
import { useSnackbar } from "notistack";

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

const MainPage = (props) => {
	const [drawerWidth, setDrawerWidth] = useState(240);
	const [open, setOpen] = useState(true);
	const [appBarTransparent, setAppBarTransparent] = useState(0.2);
	const { enqueueSnackbar } = useSnackbar();

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

	const LogOut = async () => {
		const api_url = new URL(process.env.REACT_APP_API_URL);
		api_url.pathname = `/logout2`;
		const f = await fetch(api_url.toString(), {
			method: "GET",
			credentials: "include",
			mode: "cors",
		});
		const f_data = await f.json();
		if (!f.ok) {
			enqueueSnackbar(f_data.error ?? f_data.message, {
				variant: "error",
				preventDuplicate: true,
			});
		} else {
			enqueueSnackbar(f_data.message, {
				variant: "success",
				preventDuplicate: true,
			});
			localStorage.clear();
			window.location.reload();
		}
	};

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
					<Link
						to="/"
						style={{
							textDecoration: "none",
						}}>
						<Typography
							variant="h4"
							style={{ color: `rgb(${process.env.REACT_APP_TEXT_LIGHTER})` }}>
							ANSI
						</Typography>
					</Link>
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
						height: "100%",
					}}>
					{localStorage.getItem("id") == null ? (
						<>
							<Link
								to="/login"
								style={{
									textDecoration: "none",
								}}>
								<Button
									style={{
										height: "50px",
										width: "100%",
										color: `rgb(${process.env.REACT_APP_TEXT})`,
										background: `rgb(${process.env.REACT_APP_BACKGROUND})`,
									}}>
									<Typography variant="h6">Zaloguj się</Typography>
								</Button>
							</Link>
							<Link
								to="/register"
								style={{
									textDecoration: "none",
								}}>
								<Button
									style={{
										height: "50px",
										width: "100%",
										color: `rgb(${process.env.REACT_APP_TEXT})`,
										background: `rgb(${process.env.REACT_APP_BACKGROUND})`,
									}}>
									<Typography variant="h6">Zarejestruj się</Typography>
								</Button>
							</Link>
						</>
					) : (
						<Box
							style={{
								display: "flex",
								flexDirection: "column",
								height: "100%",
							}}>
							<DrawerProfilCard />
							<Link
								to="/add"
								style={{
									textDecoration: "none",
									height: "50px",
								}}>
								<Button
									style={{
										height: "50px",
										width: "100%",
										color: `rgb(${process.env.REACT_APP_TEXT})`,
										background: `rgb(${process.env.REACT_APP_BACKGROUND})`,
									}}>
									<Typography variant="h6">Dodaj napisy</Typography>
								</Button>
							</Link>
							<Button
								onClick={LogOut}
								style={{
									marginTop: "auto",
									height: "50px",
									width: "100%",
									color: `rgb(${process.env.REACT_APP_TEXT})`,
									background: `rgb(${process.env.REACT_APP_BACKGROUND})`,
								}}>
								<Typography variant="h6">Wyloguj </Typography>
							</Button>
						</Box>
					)}
				</Box>
			</Drawer>
			<Box component="main" style={{ flexGrow: 1 }}>
				<Routes>
					<Route path="/view/:id" element={<SubView />} />
					<Route path="/user/:id/*" element={<User />} />
					<Route path="/series/:id/*" element={<SeriesView />} />
					<Route path="/add" element={<AddSub />} />
					<Route path="/admin/:tab" element={<AdminPanel />} />
					<Route path="/admin" element={<AdminPanel />} />
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
