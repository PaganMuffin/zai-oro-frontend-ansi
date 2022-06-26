import { Button, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInputWithLabel from "../../components/CustomInputWithLabel";

//NEED CHANGES
//MORE!!!!
//Still trying
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();

	useEffect(() => {
		console.log("Login page rendered");
	}, []);

	const handleSubmit = async (e) => {
		const api_url = new URL(process.env.REACT_APP_API_URL);
		api_url.pathname = `/login`;
		const f = await fetch(api_url.toString(), {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				password,
				email,
			}),
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
			navigate(`/user/${f_data.user}`);
		}
	};
	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Paper
				elevation={10}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 10,
					margin: "auto",
					width: "400px",
					alignItems: "center",
					padding: 50,
					backgroundColor: `rgb(${process.env.REACT_APP_FOREGROUND})`,
				}}>
				<Typography
					variant="h4"
					style={{
						paddingTop: 50,
						paddingBottom: 50,
						color: `rgb(${process.env.REACT_APP_TEXT_LIGHTER})`,
					}}>
					Zaloguj się
				</Typography>
				<CustomInputWithLabel
					value={email}
					setFunction={setEmail}
					label={"Adres e-mail"}
					type={"email"}
					background={`rgb(${process.env.REACT_APP_BACKGROUND})`}
					color={`rgb(${process.env.REACT_APP_TEXT})`}
				/>
				<CustomInputWithLabel
					value={password}
					setFunction={setPassword}
					label={"Hasło"}
					type={"password"}
					background={`rgb(${process.env.REACT_APP_BACKGROUND})`}
					color={`rgb(${process.env.REACT_APP_TEXT})`}
				/>
				<Button
					variant="contained"
					sx={{ marginTop: 5 }}
					onClick={handleSubmit}>
					Zaloguj się
				</Button>
			</Paper>
		</div>
	);
};

export default Login;
