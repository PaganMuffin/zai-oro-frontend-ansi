import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	NoSsr,
	Paper,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./SeriesEpisodeList.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Row = ({ data, ep }) => {
	return (
		<div
			className="containerSeriesList"
			style={{ alignItems: "center", alignContent: "center" }}>
			<Typography className="episode"></Typography>
			<Typography className="author">{data.author}</Typography>
			<Link className="comments" to={`/view/${data.id}`}>
				<Button style={{ color: `rgb(${process.env.REACT_APP_TEXT})` }}>
					Komentarze
				</Button>
			</Link>
			<a
				href={`${process.env.REACT_APP_API_URL}/file/${data.filename}`}
				download={data.filename}
				target="_blank"
				style={{
					textDecoration: "none",
					alignSelf: "end",
					marginBottom: "0 auto",
				}}>
				<Button
					className="download"
					style={{ color: `rgb(${process.env.REACT_APP_TEXT})` }}>
					Pobierz
				</Button>
			</a>
			<Typography className="added" style={{ textAlign: "end" }}>
				{new Date(data.createdAt * 1000).toLocaleDateString()}
			</Typography>
		</div>
	);
};

const SeriesEpisodeList = ({ data }) => {
	const [subData, setSubData] = useState([]);

	useEffect(() => {
		const y = data.map((x) => {
			return {
				episode: x.episode,
				subList: [],
			};
		});
		y.forEach((k) => {
			k.subList = data.filter((x) => (x.episode = k.episode));
		});
		console.log(y);
		setSubData(y);
	}, []);

	return (
		<>
			{subData.map((x) => {
				if (x.subList.length == 1) {
					return (
						<Paper
							key={x.id}
							className="containerSeriesList"
							style={{
								background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
								color: `rgb(${process.env.REACT_APP_TEXT})`,
								alignItems: "center",
								alignContent: "center",
								height: "48px",
								padding: "10px 16px 10px 12px",
							}}>
							<Typography className="episode">Odcinek {x.episode}</Typography>
							<Typography className="author">{x.subList[0].author}</Typography>
							<Link
								className="comments"
								to={`/view/${x.subList[0].id}`}
								style={{ textDecoration: "none" }}>
								<Button style={{ color: `rgb(${process.env.REACT_APP_TEXT})` }}>
									Komentarze
								</Button>
							</Link>
							<a
								className="download"
								href={`${process.env.REACT_APP_API_URL}/file/${x.subList[0].filename}`}
								download={x.subList[0].filename}
								target="_blank"
								style={{
									textDecoration: "none",
									alignSelf: "end",
									marginBottom: "0 auto",
								}}>
								<Button style={{ color: `rgb(${process.env.REACT_APP_TEXT})` }}>
									Pobierz
								</Button>
							</a>
							<Typography className="added" style={{ textAlign: "end" }}>
								{new Date(x.subList[0].createdAt * 1000).toLocaleDateString()}
							</Typography>
						</Paper>
					);
				} else {
					return (
						<Accordion
							defaultExpanded={true}
							style={{
								background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
								color: `rgb(${process.env.REACT_APP_TEXT})`,
							}}>
							<AccordionSummary
								expandIcon={
									<ExpandMoreIcon
										style={{ color: `rgb(${process.env.REACT_APP_TEXT})` }}
									/>
								}>
								<div style={{ display: "flex", width: "100%" }}>
									<Typography style={{ flexGrow: "1" }}>
										Odcinek {x.episode}
									</Typography>
									<Typography style={{ marginRight: "2rem" }}>
										Wersje {x.subList.length}
									</Typography>
								</div>
							</AccordionSummary>
							<AccordionDetails
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "1rem",
								}}>
								{x.subList.map((y) => {
									return <Row key={y.id} data={y} ep={x.episode} />;
								})}
							</AccordionDetails>
						</Accordion>
					);
				}
			})}
		</>
	);
};

export default SeriesEpisodeList;
