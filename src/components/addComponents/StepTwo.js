import { Paper } from "@mui/material";
import { useEffect } from "react";
import CustomInputWithLabel from "../CustomInputWithLabel";
import AniListSeriesCard from "./AniListSeriesCard";

const StepTwo = ({
	data,
	ep,
	setEp,
	desc,
	setDesc,
	author,
	setAuthor,
	file,
	setFile,
}) => {
	useEffect(() => {
		console.log(file);
	}, [file]);

	return (
		<Paper
			elevation={10}
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				padding: 10,
			}}>
			<AniListSeriesCard data={data} showDescription={false} />
			<CustomInputWithLabel
				value={ep}
				setFunction={setEp}
				label={"Odcinek"}
				type={"number"}
			/>
			<CustomInputWithLabel
				value={desc}
				setFunction={setDesc}
				label={"Opis"}
				type={"text"}
				multiline={true}
			/>
			<CustomInputWithLabel
				value={author}
				setFunction={setAuthor}
				label={"Autor"}
				type={"text"}
			/>
			<CustomInputWithLabel
				//value={file}
				setFunction={setFile}
				label={"Plik"}
				type={"file"}
				accept=".ass"
			/>
		</Paper>
	);
};

export default StepTwo;
