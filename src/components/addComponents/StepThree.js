import { Box, Paper, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { formatBytes } from "../../utills";
import CustomInputWithLabel from "../CustomInputWithLabel";
import AniListSeriesCard from "./AniListSeriesCard";

const StepThree = ({ data, ep, desc, author, file }) => {
	return (
		<Paper
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				padding: 10,
				backgroundColor: `rgb(${process.env.REACT_APP_FOREGROUND})`,
				color: `rgb(${process.env.REACT_APP_TEXT})`,
			}}>
			<Typography variant="h4">Podgląd</Typography>
			<AniListSeriesCard data={data} showDescription={false} />
			<CustomInputWithLabel
				background={`rgb(${process.env.REACT_APP_BACKGROUND})`}
				color={`rgb(${process.env.REACT_APP_TEXT})`}
				value={ep}
				readOnly={true}
				label="Odcinek"
			/>
			<CustomInputWithLabel
				color={`rgb(${process.env.REACT_APP_TEXT})`}
				background={`rgb(${process.env.REACT_APP_BACKGROUND})`}
				value={author}
				readOnly={true}
				label="Autor"
			/>
			<Box
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 10,
				}}>
				<Typography
					style={{ color: `rgb(${process.env.REACT_APP_TEXT})` }}
					variant="h6">
					Opis
				</Typography>
				<Paper
					className="container"
					style={{
						paddingLeft: "0.5rem",
						paddingRight: "0.5rem",
						paddingTop: "0.25rem",
						paddingBottom: "0.25rem",
						backgroundColor: `rgb(${process.env.REACT_APP_BACKGROUND})`,
						color: `rgb(${process.env.REACT_APP_TEXT})`,
					}}>
					<MDEditor.Markdown
						source={desc.trim().length === 0 ? "‎" : desc}
						style={{
							fontSize: "1.05rem",
							backgroundColor: `rgb(${process.env.REACT_APP_BACKGROUND})`,
							color: `rgb(${process.env.REACT_APP_TEXT})`,
						}}
					/>
				</Paper>
			</Box>
			<Box
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 10,
				}}>
				<Typography
					style={{ color: `rgb(${process.env.REACT_APP_TEXT})` }}
					variant="h6">
					Plik
				</Typography>
				<Paper
					className="container"
					style={{
						paddingLeft: "0.5rem",
						paddingRight: "0.5rem",
						paddingTop: "0.25rem",
						paddingBottom: "0.25rem",
						display: "flex",
						backgroundColor: `rgb(${process.env.REACT_APP_BACKGROUND})`,
						color: `rgb(${process.env.REACT_APP_TEXT})`,
					}}>
					<Typography
						variant="h6"
						fontWeight={400}
						style={{
							flexGrow: "1",
							width: "50%",
							textOverflow: "ellipsis",
							overflow: "hidden",
							whiteSpace: "nowrap",
						}}>
						{file.name}
					</Typography>
					<Typography variant="h6" fontWeight={400}>
						{file ? `${formatBytes(file.size)}` : ""}
					</Typography>
				</Paper>
			</Box>
		</Paper>
	);
};

export default StepThree;
