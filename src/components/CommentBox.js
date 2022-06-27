import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { display } from "@mui/system";

const CommentBox = ({ comment, width = "100%", isAdmin = false }) => {
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
					<Button variant="contained" color="error">
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
