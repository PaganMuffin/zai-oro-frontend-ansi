import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { useEffect } from "react";
import rehypeSanitize from "rehype-sanitize";
import { formatBytes } from "../../utills";
import CustomInputWithLabel from "../CustomInputWithLabel";
import AniListSeriesCard from "./AniListSeriesCard";
import ClearIcon from "@mui/icons-material/Clear";

const StepTwo = ({
	data,
	ep,
	setEp,
	desc,
	setDesc,
	author,
	setAuthor,
	file,
	setFile,
}) => {
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
			<Typography variant="h4">Uzupełnij dane</Typography>
			<AniListSeriesCard data={data} showDescription={false} />
			<CustomInputWithLabel
				value={ep}
				setFunction={setEp}
				label={"Odcinek"}
				type={"number"}
				background={`rgb(${process.env.REACT_APP_BACKGROUND})`}
				color={`rgb(${process.env.REACT_APP_TEXT})`}
			/>

			<CustomInputWithLabel
				value={author}
				setFunction={setAuthor}
				label={"Autor"}
				type={"text"}
				background={`rgb(${process.env.REACT_APP_BACKGROUND})`}
				color={`rgb(${process.env.REACT_APP_TEXT})`}
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
				<MDEditor
					value={desc}
					onChange={setDesc}
					style={{
						backgroundColor: `rgb(${process.env.REACT_APP_BACKGROUND})`,
						color: `rgb(${process.env.REACT_APP_TEXT})`,
					}}
					previewOptions={{
						style: {
							backgroundColor: `rgb(${process.env.REACT_APP_BACKGROUND})`,
							color: `rgb(${process.env.REACT_APP_TEXT})`,
						},
						rehypePlugins: [[rehypeSanitize]],
					}}
				/>
			</Box>

			<Box
				style={{
					display: "flex",
					gap: "1rem",
					placeItems: "center",
					paddingRight: 10,
				}}>
				<Button component="label" variant="contained">
					<Typography variant="h6">Wybierz plik</Typography>
					<input
						type="file"
						hidden
						accept=".ass, .ssa"
						onChange={(e) => {
							setFile(e.target.files[0]);
						}}
					/>
				</Button>
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
					{file ? file.name : "Nie wybrano pliku"}
				</Typography>
				<Typography variant="h6" fontWeight={400}>
					{file ? `${formatBytes(file.size)}` : ""}
				</Typography>
				<IconButton
					style={{
						color: `rgb(${process.env.REACT_APP_TEXT})`,
					}}
					onClick={() => {
						setFile(null);
					}}>
					<ClearIcon />
				</IconButton>
			</Box>
		</Paper>
	);
};

export default StepTwo;
