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
import StepTwo from "../../components/addComponents/StepTwo";
import CustomInputWithLabel from "../../components/CustomInputWithLabel";

const AddSub = () => {
	const [step, setStep] = useState(1);
	const [selectedShow, setSelectedShow] = useState(-1);
	const [ep, setEp] = useState(1);
	const [desc, setDesc] = useState("");
	const [author, setAuthor] = useState("");
	const [file, setFile] = useState(undefined);

	const StepThree = () => {
		return (
			<Paper
				elevation={10}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					padding: 10,
				}}>
				<AniListSeriesCard data={selectedShow} showDescription={false} />
				<Typography>{ep}</Typography>
				<Typography>{desc}</Typography>
				<Typography>{author}</Typography>
				<Typography>{file.name}</Typography>
			</Paper>
		);
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
				<StepTwo
					data={selectedShow}
					ep={ep}
					setEp={setEp}
					desc={desc}
					setDesc={setDesc}
					author={author}
					setAuthor={setAuthor}
					file={file}
					setFile={setFile}
				/>
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
