import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomInputWithLabel from "../../components/CustomInputWithLabel";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		console.log("Login page rendered");
	}, []);

	const handleSubmit = (e) => {
		console.log(email, password);
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
