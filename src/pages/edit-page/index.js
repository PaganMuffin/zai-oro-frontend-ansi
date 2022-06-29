import { Button, Toolbar, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StepThree from "../../components/addComponents/StepThree";
import StepTwo from "../../components/addComponents/StepTwo";

const EditPage = () => {
	const [step, setStep] = useState(-1);
	const [ep, setEp] = useState(1);
	const [desc, setDesc] = useState("");
	const [author, setAuthor] = useState("");
	const [file, setFile] = useState(undefined);
	const [fileChange, setFileChange] = useState("false");
	const { enqueueSnackbar } = useSnackbar();
	const [selectedShow, setSelectedShow] = useState(-1);

	const navigate = useNavigate();
	const params = useParams();

	const loadEntry = async () => {
		const api_url = new URL(process.env.REACT_APP_API_URL);
		api_url.pathname = `/view/${params.id}`;
		const f = await fetch(api_url.toString());
		const f_data = await f.json();
		setEp(f_data.episode);
		setDesc(f_data.description);
		setAuthor(f_data.author);
		const ff = new File([""], f_data.filename);
		setFile(ff);
		setSelectedShow(f_data.series);
		setStep(2);
	};

	useEffect(() => {
		loadEntry();
	}, []);

	const handleSubmit = async () => {
		const fd = new FormData();
		fd.append("episode", ep);
		fd.append("desc", desc);
		fd.append("author", author);
		fd.append("file", file);
		fd.append("fileChange", fileChange);
		const api_url = new URL(process.env.REACT_APP_API_URL);
		api_url.pathname = `/edit/${params.id}`;
		const f = await fetch(api_url.toString(), {
			method: "POST",
			body: fd,
			credentials: "include",
			mode: "cors",
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

	const handleFileChange = (e) => {
		setFileChange("true");
		setFile(e);
	};
	if (step == -1) return <div>LOADING</div>;
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
			{step === 2 ? (
				<StepTwo
					data={selectedShow}
					ep={ep}
					setEp={setEp}
					desc={desc}
					setDesc={setDesc}
					author={author}
					setAuthor={setAuthor}
					file={file}
					setFile={handleFileChange}
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
						color: step === 2 ? `rgba(255,255,255,0.1)` : null,
					}}
					disabled={step == 2}
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
						onClick={() => setStep(step + 1)}>
						<Typography variant="h6">Dalej</Typography>
					</Button>
				)}
			</div>
		</div>
	);
};

export default EditPage;
