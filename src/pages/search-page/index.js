import { Box, Button, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import SubEntry from "../../components/SubEntry";
import { useDebounce } from "../../utills";

const SearchView = () => {
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);
	const debounceSearchTerm = useDebounce(search, 500);
	const [page, setPage] = useState(1);
	const [hasNextPage, setHasNextPage] = useState(true);

	useEffect(() => {
		(async () => {
			const api_url = new URL(process.env.REACT_APP_API_URL);
			api_url.pathname = "/search";
			const queryString = new URLSearchParams();
			queryString.append("p", page);
			queryString.append("limit", 10);
			if (debounceSearchTerm != "") queryString.append("q", debounceSearchTerm);
			api_url.search = queryString.toString();
			const f = await fetch(api_url.toString());
			const f_data = await f.json();
			setData(f_data.result);
			console.log(f_data);
			setHasNextPage(f_data.hasNext);
		})();
	}, [debounceSearchTerm, page]);

	const incrementPage = () => {
		if (hasNextPage) setPage(page + 1);
	};

	const decrementPage = () => {
		if (page > 1) setPage(page - 1);
	};

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
		</Box>
	);
};

export default SearchView;
