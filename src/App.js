import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100vh",
			}}>
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</div>
	);
};

export default App;
