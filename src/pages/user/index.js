import {
	Avatar,
	Card,
	CardActionArea,
	CardMedia,
	Paper,
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
	const [data, setData] = useState(null);
	const [series, setSeries] = useState([]);
	const [search, setSearch] = useState("");
	const debounceSearchTerm = useDebounce(search, 500);

	const params = useParams();

	useEffect(() => {
		setData(demoUser);
		setSeries(demoData);
	}, []);

	useEffect(() => {
		console.log("????");
		if (data != null) {
			if (debounceSearchTerm) {
				const reg = new RegExp(debounceSearchTerm, "gi");
				setSeries(series.filter((x) => x.title.userPreferred.match(reg)));
			} else {
				setSeries(demoData);
			}
		}
	}, [debounceSearchTerm]);
	if (data == null) return <div>LOADING</div>;

	return (
		<div
			style={{
				width: "70%",
				margin: "auto",
				display: "flex",
				flexDirection: "column",
				gap: 20,
			}}>
			<Paper style={{ display: "flex", gap: "2rem", padding: 10 }}>
				<Avatar sx={{ width: 96, height: 96 }} />
				<Box style={{ display: "flex", flexDirection: "column" }}>
					<Typography variant="h4" style={{ flexGrow: "1" }}>
						{data.username}
					</Typography>
					<Typography>Napisy: {data.subCount}</Typography>
				</Box>
			</Paper>
			<SearchBar value={search} setFunction={setSearch} />
			<GridSeries series={series} />
		</div>
	);
};

export default User;
