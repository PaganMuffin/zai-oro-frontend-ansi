/**
 * Spięcie z API anilist
 *
 *
 *
 */

import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import StepOne from "../../components/addComponents/StepOne";

const AddSub = () => {
	const [step, setStep] = useState(1);
	const [selectedShow, setSelectedShow] = useState(-1);

	const StepTwo = () => {
		return <div>Dodanie numeru odcinka, opisu, pliku</div>;
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
