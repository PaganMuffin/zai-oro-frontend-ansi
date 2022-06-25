import { Paper, Box, Typography, Button } from "@mui/material";
import AniListSeriesCard from "./AniListSeriesCard";
import SearchBar from "../SearchBar";
import { useEffect, useState } from "react";
import { useDebounce } from "../../utills";

const StepOne = ({ value, setFunction }) => {
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const debounceSearchTerm = useDebounce(search, 500);
	const [page, setPage] = useState(1);
	const [hasNextPage, setHasNextPage] = useState(true);

	useEffect(() => {
		(async () => {
			const api_url = new URL(process.env.REACT_APP_API_URL);
			api_url.pathname = "/searchAniList";
			const queryString = new URLSearchParams();
			queryString.append("p", page);
			if (debounceSearchTerm != "") queryString.append("q", debounceSearchTerm);
			api_url.search = queryString.toString();
			const f = await fetch(api_url.toString());
			const f_data = await f.json();
			setSearchResults(f_data.data.Page.media);
			setHasNextPage(f_data.data.Page.pageInfo.hasNextPage);
		})();
	}, [debounceSearchTerm, page]);

	const incrementPage = () => {
		setFunction(-1);
		if (hasNextPage) setPage(page + 1);
	};

	const decrementPage = () => {
		setFunction(-1);
		if (page > 1) setPage(page - 1);
	};

	return (
		<Paper
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				padding: 10,
				backgroundColor: `rgb(${process.env.REACT_APP_FOREGROUND})`,
				color: `rgb(${process.env.REACT_APP_TEXT})`,
			}}>
			<Typography variant="h4">Wyszukaj anime</Typography>
			<SearchBar
				background={`rgb(${process.env.REACT_APP_BACKGROUND})`}
				color={`rgb(${process.env.REACT_APP_TEXT})`}
				value={search}
				setFunction={setSearch}
			/>
			<Box style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				{searchResults.map((data, idx) => {
					return (
						<AniListSeriesCard
							key={idx}
							id={data.id}
							data={data}
							value={value}
							setFunction={setFunction}
						/>
					);
				})}
			</Box>
			<Box
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
				}}>
				<Button
					disabled={page === 1}
					onClick={decrementPage}
					style={{
						color:
							page === 1 ? `rgba(${process.env.REACT_APP_TEXT},0.2)` : null,
					}}
					variant="contained">
					Poprzednia strona
				</Button>
				<Button
					disabled={!hasNextPage}
					style={{
						color: !hasNextPage
							? `rgba(${process.env.REACT_APP_TEXT},0.2)`
							: null,
					}}
					onClick={incrementPage}
					variant="contained">
					Następna strona
				</Button>
			</Box>
		</Paper>
	);
};

export default StepOne;
