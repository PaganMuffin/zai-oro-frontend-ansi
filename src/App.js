import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import MainPage from "./pages/main";
import Register from "./pages/register";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<MainPage />} />
			</Routes>
		</div>
	);
};

export default App;
