/**
 * Spięcie z API anilist
 *
 *
 *
 */

import { Button, Slide, Toolbar, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepOne from "../../components/addComponents/StepOne";
import StepThree from "../../components/addComponents/StepThree";
import StepTwo from "../../components/addComponents/StepTwo";

const AddSub = () => {
	const [step, setStep] = useState(1);
	const [selectedShow, setSelectedShow] = useState(-1);
	const [ep, setEp] = useState(1);
	const [desc, setDesc] = useState("");
	const [author, setAuthor] = useState("");
	const [file, setFile] = useState(undefined);
	const { enqueueSnackbar } = useSnackbar();

	const navigate = useNavigate();

	const handleSubmit = async () => {
		const fd = new FormData();
		fd.append("showId", selectedShow.id);
		fd.append("episode", ep);
		fd.append("desc", desc);
		fd.append("author", author);
		fd.append("file", file);

		const api_url = new URL(process.env.REACT_APP_API_URL);
		api_url.pathname = `/add`;
		const f = await fetch(api_url.toString(), {
			method: "POST",
			body: fd,
			credentials: "include",
		});

		const f_data = await f.json();
		if (!f.ok) {
			enqueueSnackbar(f_data.error ?? f_data.message, {
				variant: "error",
				preventDuplicate: true,
			});
		} else {
			enqueueSnackbar(f_data.message, {
				variant: "success",
				preventDuplicate: true,
			});
			navigate(`/view/${f_data.id}`);
		}
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
			<Toolbar />
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
				<StepThree
					data={selectedShow}
					ep={ep}
					desc={desc}
					author={author}
					file={file}
				/>
			)}
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
				}}>
				<Button
					variant="contained"
					style={{
						color: step === 1 ? `rgba(255,255,255,0.1)` : null,
					}}
					disabled={step === 1}
					onClick={() => setStep(step - 1)}>
					<Typography variant="h6">Cofnij</Typography>
				</Button>
				{step === 3 ? (
					<Button variant="contained" onClick={() => handleSubmit()}>
						<Typography variant="h6">Wyślij</Typography>
					</Button>
				) : (
					<Button
						variant="contained"
						style={{
							color:
								(!file && step === 2) ||
								(step === 1 && selectedShow === -1) ||
								(step === 2 && author.trim().length == 0)
									? `rgba(255,255,255,0.1)`
									: null,
						}}
						disabled={
							(!file && step === 2) ||
							(step === 1 && selectedShow === -1) ||
							(step === 2 && author.trim().length == 0)
						}
						onClick={() => setStep(step + 1)}>
						<Typography variant="h6">Dalej</Typography>
					</Button>
				)}
			</div>
		</div>
	);
};

export default AddSub;
