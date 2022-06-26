import { CompareSharp } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import CustomInputWithLabel from "../../components/CustomInputWithLabel";
import { validateEmail, checkPassword } from "../../utills";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		console.log("Login page rendered");
	}, []);

	const checkData = () => {
		let error = false;
		if (!validateEmail(email)) {
			enqueueSnackbar("Email is not valid", {
				variant: "error",
				preventDuplicate: true,
			});
			error = true;
		}
		if (!checkPassword(password)) {
			enqueueSnackbar("Password is not valid", {
				variant: "error",
				preventDuplicate: true,
			});
			error = true;
		}
		if (username === "") {
			enqueueSnackbar("Username is not valid", {
				variant: "error",
				preventDuplicate: true,
			});
			error = true;
		}

		return !error;
	};

	const handleSubmit = async (e) => {
		if (checkData()) {
			console.log(email, username, password);
			const api_url = new URL(process.env.REACT_APP_API_URL);
			api_url.pathname = `/register`;
			const f = await fetch(api_url.toString(), {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					username,
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
		} else {
			//NOT OK
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
					background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
				}}>
				<Typography
					variant="h4"
					style={{
						paddingTop: 50,
						paddingBottom: 50,
						color: `rgb(${process.env.REACT_APP_TEXT_LIGHTER})`,
					}}>
					Zarejestruj się
				</Typography>
				<CustomInputWithLabel
					value={email}
					setFunction={setEmail}
					label={"Adres e-mail"}
					type={"e-mail"}
					background={`rgb(${process.env.REACT_APP_BACKGROUND})`}
					color={`rgb(${process.env.REACT_APP_TEXT})`}
				/>
				<CustomInputWithLabel
					value={username}
					setFunction={setUsername}
					label={"Nazwa użytkownika"}
					type={"text"}
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
				<CustomInputWithLabel
					value={passwordConfirm}
					setFunction={setPasswordConfirm}
					label={"Powtórz hasło"}
					type={"password"}
					background={`rgb(${process.env.REACT_APP_BACKGROUND})`}
					color={`rgb(${process.env.REACT_APP_TEXT})`}
				/>
				<Button
					variant="contained"
					sx={{ marginTop: 5 }}
					onClick={handleSubmit}
					disabled={!(passwordConfirm === password && password.length >= 8)}>
					<Typography variant="subtitle1">Zarejestruj się</Typography>
				</Button>
			</Paper>
		</div>
	);
};

export default Register;
