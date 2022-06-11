import { Box, Divider, Paper, Typography } from "@mui/material";
import CommentBox from "../../components/CommentBox";
import SubEntry from "../../components/SubEntry";

const demoSub = {
	title: "SPY×FAMILY",
	ep: 1,
	size: 213,
	downloads: 30,
	file: "https://speed.hetzner.de/100MB.bin",
	cover:
		"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Yl5M3AiLZAMq.png",
	author: "PaganMuffin",
};

const demoComment = {
	author: "PaganMuffin",
	created_at: new Date().getTime() - 6 * 60 * 60 * 1000,
	content: "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
};

const SubView = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 10,
			}}>
			<SubEntry width="50%" data={demoSub} />;
			<Box
				sx={{
					display: "flex",
					width: "50%",
					flexDirection: "column",
					gap: 2,
				}}>
				<CommentBox comment={demoComment} />
				<CommentBox comment={demoComment} />
				<CommentBox comment={demoComment} />
				<CommentBox comment={demoComment} />
			</Box>
		</div>
	);
};

export default SubView;
