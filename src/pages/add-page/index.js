/**
 * Spięcie z API anilist
 *
 *
 *
 */

import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";

const demoData = {
	id: 127911,
	idMal: 45613,
	title: {
		romaji: "Kawaii dake ja Nai Shikimori-san",
		english: "Shikimori's Not Just a Cutie",
		native: "可愛いだけじゃない式守さん",
		userPreferred: "Kawaii dake ja Nai Shikimori-san",
	},
	coverImage: {
		extraLarge:
			"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127911-nKrY6sdaflPK.jpg",
		large:
			"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127911-nKrY6sdaflPK.jpg",
		medium:
			"https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx127911-nKrY6sdaflPK.jpg",
		color: "#1aaee4",
	},
	description:
		"The ultimate \"heartthrob girlfriend\" appears! Naturally unlucky high school student Izumi's girlfriend is his classmate Shikimori. She has a beautiful smile and kind personality and always seems happy when she's with Izumi. She's a pretty, cute, and loving girlfriend, but when Izumi's in trouble… she transforms into a super cool \"heartthrob girlfriend!\" The fun lives of the cute and cool Shikimori, Izumi, and their good friends never end!<br>\n<br>\n(Source: Crunchyroll)",
	season: "SPRING",
	seasonYear: 2022,
};

const AddSub = () => {
	const [step, setStep] = useState(1);
	const [search, setSearch] = useState("");

	const AniListSeriesCard = ({ data, id, value, setFunction }) => {
		const theme = useTheme();
		return (
			<Paper
				onClick={() => setFunction(id)}
				elevation={5}
				style={{
					backgroundColor: id === value ? theme.palette.info.dark : null,
					color: id === value ? "white" : "black",
					display: "flex",
					gap: "1rem",
					padding: 5,
					cursor: "pointer",
				}}>
				<div
					style={{
						backgroundImage: `url(${data.coverImage.medium})`,
						backgroundSize: "cover",
						height: "250px",
						aspectRatio: 8 / 11,
						borderRadius: "10px",
					}}
				/>
				<Box
					style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
					<Typography variant="h5" fontWeight={"bold"}>
						{data.title.english}
					</Typography>
					<Typography
						fontWeight={"500"}
						variant="h6"
						style={{ whiteSpace: "pre-line" }}>
						{data.description.replaceAll("<br>", "")}
					</Typography>
					<Typography>
						{data.season} {data.seasonYear}
					</Typography>
				</Box>
			</Paper>
		);
	};

	const StepOne = () => {
		const [selectedShow, setSelectedShow] = useState(-1);
		useEffect(() => {
			console.log("DASD");
		}, []);
		return (
			<Paper
				elevation={10}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					padding: 10,
				}}>
				<Typography variant="h4">Wyszukaj anime</Typography>
				<SearchBar value={search} setFunction={setSearch} />
				<Box style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					{[...Array(5).keys()].map((_, idx) => {
						return (
							<AniListSeriesCard
								key={idx}
								id={idx}
								data={demoData}
								value={selectedShow}
								setFunction={setSelectedShow}
							/>
						);
					})}
				</Box>
			</Paper>
		);
	};
	const StepTwo = () => {
		return <div>Dodanie numeru odcinka, opisu, pliku</div>;
	};
	const StepThree = () => {
		return <div>Podgląd ostateczny akceptacja</div>;
	};
	return (
		<div
			style={{
				width: "70%",
				margin: "auto",
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
			}}>
			{step === 1 ? <StepOne /> : step === 2 ? <StepTwo /> : <StepThree />}
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
				}}>
				<Button
					variant="contained"
					disabled={step === 1}
					onClick={() => setStep(step - 1)}>
					<Typography variant="h6">Cofnij</Typography>
				</Button>
				<Button
					variant="contained"
					disabled={step === 3}
					onClick={() => setStep(step + 1)}>
					<Typography variant="h6">Dalej</Typography>
				</Button>
			</div>
		</div>
	);
};

export default AddSub;
