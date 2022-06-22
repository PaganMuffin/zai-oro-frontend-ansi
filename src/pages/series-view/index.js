import { Typography } from "@mui/material";
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

const SeriesView = () => {
	return (
		<div style={{ position: "relative", padding: "0 2rem 0 2rem" }}>
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
					height: "17.5rem",
				}}>
				<div
					style={{
						backgroundImage: `url(${demoData.coverImage.large})`,
						position: "relative",
						width: "100%",
						height: "17.5rem",
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
			<div className="container" style={{ paddingTop: "1rem", width: "70%" }}>
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
				<Typography
					fontWeight={"400"}
					variant="h6"
					className="desc"
					style={{ color: "white" }}>
					{demoData.description}
				</Typography>
				<div className="info">
					season, format, episodes, mal button, al button
				</div>
				<div className="ep-list">LISTA ODCINKÓW</div>
			</div>
		</div>
	);
};

export default SeriesView;
