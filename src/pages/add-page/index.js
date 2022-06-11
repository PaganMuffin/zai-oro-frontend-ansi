/**
 * Spięcie z API anilist
 *
 *
 *
 */

import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const AddSub = () => {
	const [step, setStep] = useState(1);

	const StepOne = () => {
		return <div>Wybór anime z listy</div>;
	};
	const StepTwo = () => {
		return <div>Dodanie numeru odcinka, opisu, pliku</div>;
	};
	const StepThree = () => {
		return <div>Podgląd ostateczny akceptacja</div>;
	};
	return (
		<div style={{ width: "50%", margin: "auto" }}>
			{step == 1 ? <StepOne /> : step == 2 ? <StepTwo /> : <StepThree />}
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
				}}>
				<Button
					variant="contained"
					disabled={step == 1}
					onClick={() => setStep(step - 1)}>
					Cofnij
				</Button>
				<Button
					variant="contained"
					disabled={step == 3}
					onClick={() => setStep(step + 1)}>
					Dalej
				</Button>
			</div>
		</div>
	);
};

export default AddSub;
