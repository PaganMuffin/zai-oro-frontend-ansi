import { Divider, Paper, Typography } from "@mui/material";

const CommentBox = ({ comment, width = "100%" }) => {
	return (
		<Paper
			elevation={10}
			style={{
				width: width,
			}}>
			<Typography style={{ padding: 10 }} variant="h6">
				{comment.author}
			</Typography>
			<Divider />
			<Typography style={{ padding: 10 }} variant="subtitle1">
				{comment.content}
			</Typography>
			<Divider />
			<Typography style={{ padding: 10, textAlign: "end" }}>
				{new Date(comment.created_at).toLocaleString()}
			</Typography>
		</Paper>
	);
};

export default CommentBox;
