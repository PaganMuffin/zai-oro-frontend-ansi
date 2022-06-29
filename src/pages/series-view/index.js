import { Button, Chip, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SeriesEpisodeList from "../../components/SeriesEpisodeList";
import "./index.css";

const SeriesView = () => {
	const [seriesData, setSeriesData] = useState(null);
	const [entriesData, setEntriesData] = useState(null);

	const params = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			const api_url = new URL(process.env.REACT_APP_API_URL);
			api_url.pathname = `/series/${params.id}`;
			const f = await fetch(api_url.toString());
			if (f.status == 404) {
				navigate("/404");
			}

			const data = await f.json();
			setEntriesData(data.series.entries);
			delete data.series.entries;
			setSeriesData(data.series);
		})();
	}, []);

	if (seriesData == null || entriesData == null) return <div>LOADING</div>;
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
						backgroundImage: `url(${seriesData.coverImage.medium})`,
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
					src={seriesData.coverImage.medium}
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
					{seriesData.title.romaji}
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
							label={`${seriesData.season} ${seriesData.seasonYear}`}
						/>
						<Chip
							style={{
								color: `rgb(${process.env.REACT_APP_TEXT})`,
								background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
							}}
							label={`${seriesData.format}`}
						/>
						<Chip
							style={{
								color: `rgb(${process.env.REACT_APP_TEXT})`,
								background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
							}}
							label={`Odcinki ${seriesData.episodes}`}
						/>
					</div>
					<div style={{ display: "flex", gap: 20 }}>
						<a
							href={`https://myanimelist.net/anime/${seriesData.idMal}`}
							target="_blank"
							style={{
								textDecoration: "none",
							}}>
							<Button
								style={{
									color: `rgb(${process.env.REACT_APP_TEXT})`,
									background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
								}}
								variant="contained">
								MyAnimeList
							</Button>
						</a>
						<a
							href={`https://anilist.co/anime/${seriesData.alId}`}
							target="_blank"
							style={{
								textDecoration: "none",
							}}>
							<Button
								style={{
									color: `rgb(${process.env.REACT_APP_TEXT})`,
									background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
								}}
								variant="contained">
								AniList
							</Button>
						</a>
					</div>
				</div>
				<Typography
					fontWeight={400}
					variant="h6"
					className="desc"
					style={{ color: `rgb(${process.env.REACT_APP_TEXT})` }}>
					{seriesData.description}
				</Typography>

				<div
					className="ep-list"
					style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<SeriesEpisodeList data={entriesData} />
				</div>
			</div>
		</div>
	);
};

export default SeriesView;
