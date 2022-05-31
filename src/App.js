import { Button } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { createRef } from "react";
import { Route, Routes } from "react-router-dom";
import { XIcon } from "./icons";
import Login from "./pages/login";
import MainPage from "./pages/main";
import Register from "./pages/register";

const App = () => {
	const notistackRef = createRef();
	const onClickDismiss = (key) => () => {
		notistackRef.current.closeSnackbar(key);
	};
	return (
		<div>
			<SnackbarProvider
				ref={notistackRef}
				maxSnack={3}
				action={(key) => (
					<Button sx={{ color: "white" }} onClick={onClickDismiss(key)}>
						<XIcon />
					</Button>
				)}>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/*" element={<MainPage />} />
				</Routes>
			</SnackbarProvider>
		</div>
	);
};

export default App;
