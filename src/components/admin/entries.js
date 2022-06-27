import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Typography,
} from "@mui/material";
import { useState } from "react";

const dummyData = {
	result: [
		{
			id: "6404bea5-838c-4b0a-b649-0efe1cb8a197",
			createdAt: 1656104921,
			updatedAt: 1656104921,
			author: "dasdas",
			episode: 123,
			filename: "ef2b35d8-64da-4f01-b56f-d2567bbca7fd.ass",
			series: {
				id: "d8834f33-80d7-435a-8f29-eea14005cc6a",
				coverImage: {
					id: "dcd1ab02-8ba7-44dd-9d32-b0fdedb7e249",
					medium:
						"https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx123-nTVq4CHgK5Ly.jpg",
				},
				title: {
					id: "bc1b5945-a7c5-4176-afae-3bbbe7d61dc0",
					romaji: "Fushigi Yuugi",
				},
			},
			description: "asdasdasd",
		},
		{
			id: "9bcc7d70-a232-4eb9-a6eb-5fcb07e79a09",
			createdAt: 1656121751,
			updatedAt: 1657121751,
			author: "6547gc",
			episode: 12,
			filename: "4022d94e-fd20-429f-9b5b-1bba3ffdb0c4.ass",
			series: {
				id: "b3698b1f-0df3-449f-ba4b-66f900fda3f5",
				coverImage: {
					id: "0aa8b903-94a4-4363-9dde-2d1fbd97aed2",
					medium:
						"https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b1234-FxtX1sh0KkLy.png",
				},
				title: {
					id: "21519798-966e-4f73-9c16-ff90ffefd6f9",
					romaji: "Hand Maid Mai",
				},
			},
			description: "432",
		},
		{
			id: "b55cbe1c-c3af-42e0-a029-71fd358b2e2d",
			createdAt: 1656204896,
			updatedAt: 1656204896,
			author: "dasdas",
			episode: 1,
			filename: "51ea9a24-ceb4-4063-a6dd-937b6a5a5045.ass",
			series: {
				id: "f1523132-0dcb-4faa-8004-6f8235554af3",
				coverImage: {
					id: "2b49d4f8-c710-4bd8-9f0b-0e82165b035f",
					medium:
						"https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx19-ham53gnijfiN.jpg",
				},
				title: {
					id: "50845f96-f447-4e9d-8222-173b4ee9171c",
					romaji: "MONSTER",
				},
			},
			description: "dasdasd",
		},
	],
	hasNext: false,
};

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
	const [page, setPage] = useState(1);
	const [hasNextPage, setHasNextPage] = useState(false);

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
				gap: "1rem",
			}}>
			{dummyData.result.map((entry) => {
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
