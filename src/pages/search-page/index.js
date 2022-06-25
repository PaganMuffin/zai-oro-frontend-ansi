import { Box, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import SubEntry from "../../components/SubEntry";
import { useDebounce } from "../../utills";

const SearchView = () => {
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);
	const debounceSearchTerm = useDebounce(search, 500);

	useEffect(() => {
		(async () => {
			const api_url = new URL(process.env.REACT_APP_API_URL);
			api_url.pathname = "/search";
			const queryString = new URLSearchParams();
			queryString.append("q", debounceSearchTerm);
			const f = await fetch(api_url.toString() + "?" + queryString.toString());
			const f_data = await f.json();
			setData(f_data.result);
		})();
	}, [debounceSearchTerm]);

	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 25,
				width: "70%",
				margin: "auto",
			}}>
			<Toolbar />
			<SearchBar
				background={`rgb(${process.env.REACT_APP_FOREGROUND})`}
				color={`rgb(${process.env.REACT_APP_TEXT})`}
				value={search}
				setFunction={setSearch}
				width={"100%"}
			/>
			{data.map((x) => {
				return <SubEntry data={x} />;
			})}
		</Box>
	);
};

export default SearchView;
