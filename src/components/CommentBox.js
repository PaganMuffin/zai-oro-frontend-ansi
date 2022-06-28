import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { display } from "@mui/system";
import { useSnackbar } from "notistack";

const CommentBox = ({
	comment,
	width = "100%",
	isAdmin = false,
	notifyOnDelete = null,
}) => {
	const { enqueueSnackbar } = useSnackbar();

	const handleDelete = async () => {
		const api_url = new URL(process.env.REACT_APP_API_URL);
		api_url.pathname = `/admin/comments/${comment.id}`;
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
			enqueueSnackbar(f_data.message, {
				variant: "success",
				preventDuplicate: true,
			});
			notifyOnDelete((prev) => {
				return (prev = prev + 1);
			});
		}
	};

	return (
		<Paper
			style={{
				width: width,
				background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
				color: `rgb(${process.env.REACT_APP_TEXT})`,
			}}>
			<Typography style={{ padding: 10 }} variant="h6">
				{comment.user.username}
			</Typography>
			<Divider sx={{ background: `rgba(${process.env.REACT_APP_TEXT},0.2)` }} />
			<Typography style={{ padding: 10 }} variant="subtitle1">
				{comment.content}
			</Typography>
			<Divider sx={{ background: `rgba(${process.env.REACT_APP_TEXT},0.2)` }} />
			{isAdmin ? (
				<Box
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: 10,
					}}>
					<Button onClick={handleDelete} variant="contained" color="error">
						USUŃ
					</Button>
					<Typography style={{ padding: 10, textAlign: "end" }}>
						{new Date(comment.createdAt * 1000).toLocaleString()}
					</Typography>
				</Box>
			) : (
				<Typography style={{ padding: 10, textAlign: "end" }}>
					{new Date(comment.createdAt * 1000).toLocaleString()}
				</Typography>
			)}
		</Paper>
	);
};

export default CommentBox;
