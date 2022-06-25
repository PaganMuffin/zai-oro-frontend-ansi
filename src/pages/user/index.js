import {
	Avatar,
	Card,
	CardActionArea,
	CardMedia,
	Paper,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { useDebounce } from "../../utills";
import demoData from "../../components/addComponents/demoData.json";
import { Box } from "@mui/system";
import GridSeries from "../../components/GridSeries";

const demoUser = {
	id: 1,
	username: "PaganMuffin",
	avatar: "",
	subCount: 120,
};

const demoLatestSubs = [{}];

const User = () => {
	const [userData, setUserData] = useState(null);
	const [seriesData, setSeriesData] = useState([]);
	const [fullSeriesData, setFullSeriesData] = useState([]);
	const [subCount, setSubCount] = useState(0);
	const [search, setSearch] = useState("");
	const debounceSearchTerm = useDebounce(search, 500);

	const params = useParams();

	useEffect(() => {
		(async () => {
			const api_url = new URL(process.env.REACT_APP_API_URL);
			api_url.pathname = `/user/${params.id}`;
			const f = await fetch(api_url.toString());
			const f_data = await f.json();
			console.log(f_data);
			setSubCount(f_data.count);
			setSeriesData(f_data.result);
			setFullSeriesData(f_data.result);
			setUserData(f_data.user);
		})();
	}, []);

	useEffect(() => {
		if (seriesData != null) {
			if (debounceSearchTerm) {
				const reg = new RegExp(debounceSearchTerm, "gi");
				setSeriesData(seriesData.filter((x) => x.title.romaji.match(reg)));
			} else {
				setSeriesData(fullSeriesData);
			}
		}
	}, [debounceSearchTerm]);
	if (userData == null) return <div>LOADING</div>;

	return (
		<div
			style={{
				width: "70%",
				margin: "auto",
				display: "flex",
				flexDirection: "column",
				gap: 20,
			}}>
			<Toolbar />
			<Paper
				style={{
					display: "flex",
					gap: "2rem",
					padding: 10,
					background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
					color: `rgb(${process.env.REACT_APP_TEXT})`,
				}}>
				<Avatar src={userData.avatar} sx={{ width: 96, height: 96 }} />
				<Box style={{ display: "flex", flexDirection: "column" }}>
					<Typography variant="h4" style={{ flexGrow: "1" }}>
						{userData.username}
					</Typography>
					<Typography>Napisy: {subCount}</Typography>
				</Box>
			</Paper>
			<SearchBar
				background={`rgb(${process.env.REACT_APP_FOREGROUND})`}
				color={`rgb(${process.env.REACT_APP_TEXT})`}
				value={search}
				setFunction={setSearch}
			/>
			<GridSeries series={seriesData} />
		</div>
	);
};

export default User;
