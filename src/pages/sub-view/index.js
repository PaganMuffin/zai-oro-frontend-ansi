import {
	Box,
	Button,
	Divider,
	InputBase,
	Paper,
	TextareaAutosize,
	Toolbar,
	Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "../../components/CommentBox";
import CustomInputWithLabel from "../../components/CustomInputWithLabel";
import SubEntry from "../../components/SubEntry";

const SubView = () => {
	const [comments, setComments] = useState([]);
	const [seriesData, setSeriesData] = useState(null);
	const [comment, setComment] = useState("");
	const { enqueueSnackbar } = useSnackbar();
	const params = useParams();

	const loadEntry = async () => {
		const api_url = new URL(process.env.REACT_APP_API_URL);
		api_url.pathname = `/view/${params.id}`;
		const f = await fetch(api_url.toString());
		const f_data = await f.json();
		setSeriesData(f_data);
	};
	const loadComments = async () => {
		const api_url = new URL(process.env.REACT_APP_API_URL);
		api_url.pathname = `/comments/${params.id}`;
		const f = await fetch(api_url.toString());
		const f_data = await f.json();
		setComments(f_data);
	};

	useEffect(() => {
		loadEntry();
		loadComments();
	}, []);

	const handleCommentAdd = async () => {
		const api_url = new URL(process.env.REACT_APP_API_URL);
		api_url.pathname = `/comment/${params.id}`;
		const f = await fetch(api_url.toString(), {
			method: "POST",
			headers: {
				"Content-Type": "text/plain",
			},
			body: comment,
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
			loadComments();
		}
	};

	if (seriesData == null) return <div>LOADING</div>;
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				margin: "0 auto",
				gap: "3rem",
				width: "70%",
			}}>
			<Toolbar />
			<SubEntry width="100%" data={seriesData} />
			<Box
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					width: "100%",
				}}>
				<CustomInputWithLabel
					multiline={true}
					minRows={3}
					label={"Komentarz"}
					value={comment}
					setFunction={setComment}
					color={`rgb(${process.env.REACT_APP_TEXT})`}
					background={`rgb(${process.env.REACT_APP_FOREGROUND})`}
				/>
				<Button
					onClick={handleCommentAdd}
					variant="contained"
					disabled={comment.length == 0}
					style={{
						color:
							comment.length == 0
								? `rgba(${process.env.REACT_APP_TEXT},0.2)`
								: null,
					}}>
					Doddaj
				</Button>
			</Box>

			<Box
				sx={{
					display: "flex",
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
