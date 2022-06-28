import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useDebounce } from "../../utills";
import SearchBar from "../SearchBar";

const EntriesAccordion = ({ data }) => {
	return (
		<Accordion
			style={{
				background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
				color: `rgb(${process.env.REACT_APP_TEXT})`,
			}}>
			<AccordionSummary>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
					}}>
					<Typography variant="h5">
						{data.series.title.romaji} #{data.episode}
					</Typography>
					<Typography variant="h5">{data.author}</Typography>
				</Box>
			</AccordionSummary>
			<AccordionDetails>
				<Box
					style={{
						display: "flex",
						flexDirection: "column",
						gap: 10,
					}}>
					<Typography variant="h6">
						{data.series.title.romaji} #{data.episode}
					</Typography>
					<Typography variant="h6">Autor: {data.author}</Typography>
					<Typography variant="h6">Uploader: {data?.user?.username}</Typography>
					<Typography>
						Dodany: {new Date(data.createdAt * 1000).toLocaleString()}
					</Typography>
					<Typography>
						Zaktualizowany: {new Date(data.updatedAt * 1000).toLocaleString()}
					</Typography>
					<Box
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}>
						<a
							href={`${process.env.REACT_APP_API_URL}/file/${data.filename}`}
							download={data.filename}
							target="_blank"
							style={{
								textDecoration: "none",
								alignSelf: "end",
								marginBottom: "0 auto",
							}}>
							<Button variant="contained">Pobierz</Button>
						</a>
						<Button variant="contained" color="error">
							Usuń
						</Button>
					</Box>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};

const AdminEntries = () => {
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);
	const debounceSearchTerm = useDebounce(search, 500);
	const [page, setPage] = useState(1);
	const [hasNextPage, setHasNextPage] = useState(false);
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		(async () => {
			const api_url = new URL(process.env.REACT_APP_API_URL);
			api_url.pathname = "/admin/entries";

			const queryString = new URLSearchParams();

			queryString.append("p", page);
			queryString.append("limit", 10);

			if (debounceSearchTerm != "") queryString.append("q", debounceSearchTerm);

			api_url.search = queryString.toString();

			const f = await fetch(api_url.toString());
			const f_data = await f.json();
			if (!f.ok) {
				enqueueSnackbar(f_data.error ?? f_data.message, {
					variant: "error",
					preventDuplicate: true,
				});
			} else {
				setData(f_data.result);
				setHasNextPage(f_data.hasNext);
			}
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
				gap: 25,
				width: "100%",
				margin: "auto",
			}}>
			<SearchBar
				background={`rgb(${process.env.REACT_APP_FOREGROUND})`}
				color={`rgb(${process.env.REACT_APP_TEXT})`}
				value={search}
				setFunction={setSearch}
				width={"100%"}
			/>
			{data.map((entry) => {
				return <EntriesAccordion key={entry.id} data={entry} />;
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

export default AdminEntries;
