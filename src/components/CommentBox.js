import { Divider, Paper, Typography } from "@mui/material";

const CommentBox = ({ comment, width = "100%" }) => {
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
			<Divider />
			<Typography style={{ padding: 10 }} variant="subtitle1">
				{comment.content}
			</Typography>
			<Divider />
			<Typography style={{ padding: 10, textAlign: "end" }}>
				{new Date(comment.createdAt * 1000).toLocaleString()}
			</Typography>
		</Paper>
	);
};

export default CommentBox;
