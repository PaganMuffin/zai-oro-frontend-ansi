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

const Row = ({ data, ep }) => {
	return (
		<div
			className="containerSeriesList"
			style={{ alignItems: "center", alignContent: "center" }}>
			<Typography className="episode"></Typography>
			<Typography className="author">{data.author}</Typography>
			<Button className="comments" variant="contained">
				Komentarze
			</Button>
			<Button className="download" variant="contained">
				Pobierz
			</Button>
			<Typography className="added" style={{ textAlign: "end" }}>
				{new Date(data.addedAt).toLocaleDateString()}
			</Typography>
		</div>
	);
};

const SeriesEpisodeList = ({ data }) => {
	return (
		<>
			{data.map((x) => {
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
							<Button className="comments" variant="contained">
								Komentarze
							</Button>
							<Button className="download" variant="contained">
								Pobierz
							</Button>
							<Typography className="added" style={{ textAlign: "end" }}>
								{new Date(x.subList[0].addedAt).toLocaleDateString()}
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
