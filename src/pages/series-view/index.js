import {
	Button,
	Chip,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Toolbar,
	Typography,
} from "@mui/material";
import SeriesEpisodeList from "../../components/SeriesEpisodeList";
import CollapsibleTable from "../../components/SeriesEpisodeList";
import { getRandomIntInclusive } from "../../utills";
import "./index.css";

const demoData = {
	id: 114129,
	title: {
		userPreferred: "Gintama: THE FINAL",
	},
	coverImage: {
		extraLarge:
			"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114129-RLgSuh6YbeYx.jpg",
		large:
			"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114129-RLgSuh6YbeYx.jpg",
		color: "#e48643",
	},
	startDate: {
		year: 2021,
		month: 1,
		day: 8,
	},
	endDate: {
		year: 2021,
		month: 1,
		day: 8,
	},
	bannerImage:
		"https://s4.anilist.co/file/anilistcdn/media/anime/banner/114129-ZsLDkdwaYeJY.jpg",
	season: "WINTER",
	seasonYear: 2021,
	description:
		"<i>Gintama: THE FINAL</i> is the 3rd and final film adaptation of the remainder of the Silver Soul arc and is the series finale. <i>Gintama: THE FINAL</i> is the 3rd and final film adaptation of the remainder of the Silver Soul arc and is the series finale. <i>Gintama: THE FINAL</i> is the 3rd and final film adaptation of the remainder of the Silver Soul arc and is the series finale.",
	type: "ANIME",
	format: "MOVIE",
	status: "FINISHED",
	episodes: 1,
	duration: 104,
	chapters: null,
	volumes: null,
	genres: ["Action", "Comedy", "Drama", "Sci-Fi"],
	isAdult: false,
	averageScore: 92,
	popularity: 23075,
	nextAiringEpisode: null,
	mediaListEntry: null,
	studios: {
		edges: [
			{
				isMain: true,
				node: {
					id: 6116,
					name: "Bandai Namco Pictures",
				},
			},
		],
	},
};

const demoSubs = [
	{
		episode: 1,
		subList: [
			{
				id: "1",
				author: "PaganMuffin",
				addedAt: new Date().getTime() - getRandomIntInclusive(10000, 50000),
			},
			{
				id: "2",
				author: "Ogórek",
				addedAt: new Date().getTime() - getRandomIntInclusive(10000, 50000),
			},
		],
	},
	{
		episode: 2,
		subList: [
			{
				id: "3",
				author: "PaganMuffin",
				addedAt: new Date().getTime() - getRandomIntInclusive(10000, 50000),
			},
		],
	},
];

const SeriesView = () => {
	return (
		<div style={{ position: "relative", padding: "0 2rem" }}>
			{/* BANNER */}
			<div
				style={{
					clip: "rect(0,auto,auto,0)",
					WebkitClipPath: "inset(0 0)",
					clipPath: "inset(0 0)",
					position: "absolute",
					left: 0,
					top: 0,
					zIndex: -1,
					width: "100%",
					height: "25rem",
				}}>
				<div
					style={{
						backgroundImage: `url(${demoData.coverImage.large})`,
						position: "relative",
						width: "100%",
						height: "25rem",
						backgroundSize: "cover",
						backgroundPosition: "center 25%",
					}}>
					<div
						style={{
							position: "absolute",
							width: "100%",
							height: "100%",
							backdropFilter: "blur(5px)",
							pointerEvents: "none",
							backgroundColor: "rgba(0,0,0,0.25)",
						}}
					/>
				</div>
			</div>
			{/* RESZTA STRONY */}
			<Toolbar />
			<div
				className="container"
				style={{ paddingTop: "2rem", margin: "auto", width: "70%" }}>
				<img
					className="cover"
					src={demoData.coverImage.large}
					style={{
						aspectRatio: 8 / 11,
						borderRadius: "10px",
						placeSelf: "center",
						height: "25rem",
					}}
				/>
				<Typography
					fontWeight={500}
					variant="h2"
					className="title"
					style={{ color: "white" }}>
					{demoData.title.userPreferred}
				</Typography>
				<div
					className="info"
					style={{ display: "flex", flexDirection: "column", gap: 20 }}>
					<div style={{ display: "flex", gap: 20, flexGrow: "1" }}>
						<Chip
							style={{
								color: `rgb(${process.env.REACT_APP_TEXT})`,
								background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
							}}
							label={`${demoData.season} ${demoData.seasonYear}`}
						/>
						<Chip
							style={{
								color: `rgb(${process.env.REACT_APP_TEXT})`,
								background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
							}}
							label={`${demoData.format}`}
						/>
						<Chip
							style={{
								color: `rgb(${process.env.REACT_APP_TEXT})`,
								background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
							}}
							label={`Odcinki ${demoData.episodes}`}
						/>
					</div>
					<div style={{ display: "flex", gap: 20 }}>
						<Button
							style={{
								color: `rgb(${process.env.REACT_APP_TEXT})`,
								background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
							}}
							variant="contained">
							MyAnimeList
						</Button>
						<Button
							style={{
								color: `rgb(${process.env.REACT_APP_TEXT})`,
								background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
							}}
							variant="contained">
							AniList
						</Button>
					</div>
				</div>
				<Typography
					fontWeight={400}
					variant="h6"
					className="desc"
					style={{ color: "white" }}>
					{demoData.description}
				</Typography>

				<dic
					className="ep-list"
					style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<SeriesEpisodeList data={demoSubs} />
				</dic>
			</div>
		</div>
	);
};

export default SeriesView;
