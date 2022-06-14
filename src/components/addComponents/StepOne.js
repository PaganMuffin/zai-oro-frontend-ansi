import { Paper, Box, Typography } from "@mui/material";
import AniListSeriesCard from "./AniListSeriesCard";
import SearchBar from "../SearchBar";
import { useEffect, useState } from "react";

import demoData from "./demoData.json";

const StepOne = ({ value, setFunction }) => {
	const [search, setSearch] = useState("");

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
				{demoData.slice(0, 1).map((data, idx) => {
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
		</Paper>
	);
};

export default StepOne;
