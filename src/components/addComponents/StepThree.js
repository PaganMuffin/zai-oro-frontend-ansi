import { Paper } from "@mui/material";
import CustomInputWithLabel from "../CustomInputWithLabel";
import AniListSeriesCard from "./AniListSeriesCard";

const StepThree = ({ data, ep, desc, author, file }) => {
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
			<CustomInputWithLabel value={ep} readOnly={true} label="Odcinek" />
			<CustomInputWithLabel
				value={desc}
				readOnly={true}
				label="Opis"
				multiline={true}
			/>
			<CustomInputWithLabel value={author} readOnly={true} label="Autor" />
			<CustomInputWithLabel
				value={`${file.name}\n${(file.size / 1024).toFixed(2)}KB`}
				readOnly={true}
				label="Plik"
				multiline={true}
			/>
		</Paper>
	);
};

export default StepThree;
