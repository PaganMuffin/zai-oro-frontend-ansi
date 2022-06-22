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
		<div>
			<Paper>
				<Avatar sx={{ width: 56, height: 56 }} />
				<Typography>{data.username}</Typography>
				<Typography>{data.subCount}</Typography>
			</Paper>
			<SearchBar value={search} setFunction={setSearch} />
			<GridSeries series={series} />
		</div>
	);
};

export default User;
