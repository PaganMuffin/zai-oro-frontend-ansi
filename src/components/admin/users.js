import styled from "@emotion/styled";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Avatar,
	Box,
	Button,
	InputLabel,
	MenuItem,
	Select,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	Typography,
} from "@mui/material";
import { useState } from "react";
import CustomInputWithLabel from "../CustomInputWithLabel";

const CustomSelect = styled(Select)(() => ({
	width: 300,
	"&.MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: `rgba(${process.env.REACT_APP_TEXT},0.2)`,
		},
		"&:hover fieldset": {
			borderColor: `rgb(${process.env.REACT_APP_TEXT_LIGHTER})`,
		},
		"&.Mui-focused fieldset": {
			borderColor: `rgb(${process.env.REACT_APP_TEXT_LIGHTER})`,
		},
		"& svg": {
			fill: `rgba(${process.env.REACT_APP_TEXT},0.2)`,
		},
	},
}));

const usersDemo = [
	{
		id: "312312-312-3-12-312-",
		username: "PaganMuffin",
		avatar: null,
		email: "PaganMuffin@gmail.com",
		role: "user",
	},
];

const roles = ["admin", "user"];

const UserAccordion = ({ user }) => {
	const [username, setUsername] = useState(user.username);
	const [email, setEmail] = useState(user.email);
	const [role, setRole] = useState(user.role);

	return (
		<Accordion
			key={user.id}
			style={{
				background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
				color: `rgb(${process.env.REACT_APP_TEXT})`,
			}}>
			<AccordionSummary>
				<Typography variant="h5">{user.username}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box
					style={{
						width: "90%",
						margin: "auto",
						display: "flex",
						flexDirection: "column",
						gap: "2rem",
					}}>
					<Box
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 10,
						}}>
						<Box
							style={{
								display: "flex",
								justifyContent: "space-around",
								width: "100%",
								alignItems: "center",
							}}>
							<Avatar src={user.avatar} sx={{ width: 96, height: 96 }} />
							<Box>
								<InputLabel
									style={{
										color: `rgb(${process.env.REACT_APP_TEXT})`,
									}}>
									Rola
								</InputLabel>

								<CustomSelect
									style={{
										height: "3rem",
										width: "10rem",
										color: `rgb(${process.env.REACT_APP_TEXT})`,
									}}
									sx={{
										borderColor: "red",
									}}
									value={role}
									onChange={(e) => setRole(e.target.value)}>
									{roles.map((role) => {
										return (
											<MenuItem key={role} value={role}>
												{role}
											</MenuItem>
										);
									})}
								</CustomSelect>
							</Box>
						</Box>
						<CustomInputWithLabel
							color={`rgb(${process.env.REACT_APP_TEXT})`}
							background={`rgb(${process.env.REACT_APP_BACKGROUND})`}
							value={username}
							setFunction={setUsername}
						/>
						<CustomInputWithLabel
							color={`rgb(${process.env.REACT_APP_TEXT})`}
							background={`rgb(${process.env.REACT_APP_BACKGROUND})`}
							value={email}
							setFunction={setEmail}
						/>
					</Box>
					<Box
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
						}}>
						<Button color="error" variant="contained">
							Usuń konto
						</Button>
						<Button color="success" variant="contained">
							Zapisz zmiany
						</Button>
					</Box>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};

const AdminUsers = () => {
	return (
		<Box>
			{usersDemo.map((user) => {
				return <UserAccordion key={user.id} user={user} />;
			})}
		</Box>
	);
};

export default AdminUsers;
