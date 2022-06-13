/**
 * Spięcie z API anilist
 *
 *
 *
 */

import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AniListSeriesCard from "../../components/addComponents/AniListSeriesCard";
import StepOne from "../../components/addComponents/StepOne";
import CustomInputWithLabel from "../../components/CustomInputWithLabel";

const AddSub = () => {
	const [step, setStep] = useState(1);
	const [selectedShow, setSelectedShow] = useState(-1);

	const StepTwo = () => {
		const [ep, setEp] = useState(1);
		const [desc, setDesc] = useState("");
		const [file, setFile] = useState(undefined);

		useEffect(() => {
			console.log(file);
		}, [file]);
		return (
			<Paper>
				<div>Dodanie numeru odcinka, opisu, pliku</div>
				<AniListSeriesCard data={selectedShow} showDescription={false} />
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
					//value={file}
					setFunction={setFile}
					label={"Plik"}
					type={"file"}
				/>
			</Paper>
		);
	};

	const StepThree = () => {
		return <div>Podgląd ostateczny akceptacja</div>;
	};

	useEffect(() => {
		console.log(selectedShow);
	}, [selectedShow]);

	return (
		<div
			style={{
				width: "70%",
				margin: "auto",
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
			}}>
			{step === 1 ? (
				<StepOne value={selectedShow} setFunction={setSelectedShow} />
			) : step === 2 ? (
				<StepTwo />
			) : (
				<StepThree />
			)}
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
