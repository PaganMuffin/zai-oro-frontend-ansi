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

const SubView = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<div>
				<SubEntry width="100%" data={demoSub} />;
			</div>
		</div>
	);
};

export default SubView;
