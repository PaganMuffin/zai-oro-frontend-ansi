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
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useDebounce } from "../../utills";
import CustomInputWithLabel from "../CustomInputWithLabel";
import SearchBar from "../SearchBar";

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

const roles = ["admin", "user"];

const UserAccordion = ({ user, notifyOnDelete }) => {
	const [username, setUsername] = useState(user.username);
	const [email, setEmail] = useState(user.email);
	const [role, setRole] = useState(user.role);
	const { enqueueSnackbar } = useSnackbar();

	const handleDelete = async () => {
		const api_url = new URL(process.env.REACT_APP_API_URL);
		api_url.pathname = `/admin/users/${user.id}`;
		const f = await fetch(api_url.toString(), {
			method: "delete",
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
			enqueueSnackbar("Użytkownik usunięty", {
				variant: "success",
				preventDuplicate: true,
			});
			notifyOnDelete((prev) => {
				console.log(prev);
				return (prev = prev + 1);
			});
		}
	};

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
						<Button onClick={handleDelete} color="error" variant="contained">
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
	const [users, setUsers] = useState([]);
	const [page, setPage] = useState(1);
	const [hasNextPage, setHasNextPage] = useState(false);
	const [search, setSearch] = useState("");
	const debounceSearchTerm = useDebounce(search, 500);
	const { enqueueSnackbar } = useSnackbar();
	const [countDelete, setCountDelete] = useState(0);
	useEffect(() => {
		console.log(countDelete);
		(async () => {
			const api_url = new URL(process.env.REACT_APP_API_URL);
			api_url.pathname = "/admin/users";
			const queryString = new URLSearchParams();
			queryString.append("p", page);
			queryString.append("limit", 10);
			if (debounceSearchTerm != "") queryString.append("q", debounceSearchTerm);
			api_url.search = queryString.toString();
			const f = await fetch(api_url.toString(), {
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
				setUsers(f_data.result);
				setHasNextPage(f_data.hasNext);
			}
		})();
	}, [debounceSearchTerm, page, countDelete]);

	const incrementPage = () => {
		if (hasNextPage) setPage(page + 1);
	};

	const decrementPage = () => {
		if (page > 1) setPage(page - 1);
	};

	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 25,
				width: "100%",
				margin: "auto",
			}}>
			<SearchBar
				background={`rgb(${process.env.REACT_APP_FOREGROUND})`}
				color={`rgb(${process.env.REACT_APP_TEXT})`}
				value={search}
				setFunction={setSearch}
				width={"100%"}
			/>
			{users.map((user) => {
				return (
					<UserAccordion
						notifyOnDelete={setCountDelete}
						key={user.id}
						user={user}
					/>
				);
			})}
			<Box
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
				}}>
				<Button
					disabled={page === 1}
					onClick={decrementPage}
					style={{
						color:
							page === 1 ? `rgba(${process.env.REACT_APP_TEXT},0.2)` : null,
					}}
					variant="contained">
					Poprzednia strona
				</Button>
				<Button
					disabled={!hasNextPage}
					style={{
						color: !hasNextPage
							? `rgba(${process.env.REACT_APP_TEXT},0.2)`
							: null,
					}}
					onClick={incrementPage}
					variant="contained">
					Następna strona
				</Button>
			</Box>
		</Box>
	);
};

export default AdminUsers;
