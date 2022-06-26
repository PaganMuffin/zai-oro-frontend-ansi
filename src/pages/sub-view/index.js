import { Box, Divider, Paper, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "../../components/CommentBox";
import SubEntry from "../../components/SubEntry";

const SubView = () => {
	const [comments, setComments] = useState([]);
	const [seriesData, setSeriesData] = useState(null);

	const params = useParams();

	useEffect(() => {
		(async () => {
			const api_url = new URL(process.env.REACT_APP_API_URL);
			api_url.pathname = `/view/${params.id}`;
			const f = await fetch(api_url.toString());
			const f_data = await f.json();
			setSeriesData(f_data);
		})();

		(async () => {
			const api_url = new URL(process.env.REACT_APP_API_URL);
			api_url.pathname = `/comments/${params.id}`;
			const f = await fetch(api_url.toString());
			const f_data = await f.json();
			setComments(f_data);
		})();
	}, []);

	if (seriesData == null) return <div>LOADING</div>;
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "3rem",
			}}>
			<Toolbar />
			<SubEntry width="50%" data={seriesData} />
			<Box
				sx={{
					display: "flex",
					width: "50%",
					flexDirection: "column",
					gap: "1rem",
				}}>
				{comments.map((x) => {
					return <CommentBox comment={x} />;
				})}
			</Box>
		</div>
	);
};

export default SubView;
