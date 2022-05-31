import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomInputWithLabel from "../../components/CustomInputwithLabel";
import validateEmail from "../../utills";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	useEffect(() => {
		console.log("Login page rendered");
	}, []);

	const checkData = () => {
		console.log(email);
	};

	const checkPasswords = () => {
		if (password === passwordConfirm && password.length > 0) {
			return true;
		}
		return false;
	};

	const handleSubmit = (e) => {
		checkData();
		console.log(email, username, password);
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
				}}>
				<Typography variant="h4" style={{ paddingTop: 50, paddingBottom: 50 }}>
					Zarejestruj się
				</Typography>
				<CustomInputWithLabel
					value={email}
					setFunction={setEmail}
					label={"Adres e-mail"}
					type={"e-mail"}
				/>
				<CustomInputWithLabel
					value={username}
					setFunction={setUsername}
					label={"Nazwa użytkownika"}
					type={"text"}
				/>
				<CustomInputWithLabel
					value={password}
					setFunction={setPassword}
					label={"Hasło"}
					type={"password"}
				/>
				<CustomInputWithLabel
					value={passwordConfirm}
					setFunction={setPasswordConfirm}
					label={"Powtórz hasło"}
					type={"password"}
				/>
				<Button
					variant="contained"
					sx={{ marginTop: 5 }}
					onClick={handleSubmit}
					disabled={!checkPasswords()}>
					Zarejestruj się
				</Button>
			</Paper>
		</div>
	);
};

export default Register;
